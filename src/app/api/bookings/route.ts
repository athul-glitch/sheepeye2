import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

const sns = new SNSClient({
  region: "ap-south-1",
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, service, message } = body;

    if (!name || !email || !service) {
      return NextResponse.json(
        { error: "Name, email, and service are required." },
        { status: 400 }
      );
    }

    // Save booking to Neon PostgreSQL
    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        service,
        message: message || null,
      },
    });

    // Send booking notification through AWS SNS
    try {
      await sns.send(
        new PublishCommand({
          TopicArn:
            "arn:aws:sns:ap-south-1:318273659613:sheepeye_",
          Subject: "New Sheepeye Booking",
          Message: `New booking received!

Name: ${name}
Email: ${email}
Service: ${service}
Message: ${message || "No message"}

Booking ID: ${booking.id}`,
        })
      );

      console.log("SNS notification sent successfully");
    } catch (snsError) {
      // Don't fail the booking if the email notification fails
      console.error("SNS notification failed:", snsError);
    }

    return NextResponse.json(
      {
        success: true,
        booking,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking error:", error);

    return NextResponse.json(
      { error: "Failed to create booking." },
      { status: 500 }
    );
  }
}