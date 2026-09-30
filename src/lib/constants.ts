export const SITE = {
  name: "SheepEye",
  tagline: "Drive In Dirty. Leave Immaculate.",
  address: "Thanipuzha,Kalady,683544",
  phone: "9656377298",
  email: "jishnukumaran1234@gmail.com",
  hours: "Mon–Sun · 7 AM – 9 PM",
};

export const NAV_LINKS = [
  { label: "Services",   href: "#services" },
  { label: "Pricing",    href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews",    href: "#reviews" },
  { label: "Contact",    href: "#contact" },
];

export const SERVICES = [
  { id: "express", icon: "Zap",      title: "Express Wash",    description: "Full exterior rinse, high-pressure foam bath, spot-free final rinse", duration: "20 mins", badge: "" },
  { id: "interior", icon: "Wind",     title: "Interior Detail",  description: "Deep vacuum, leather conditioning, dashboard treatment, and air freshener", duration: "45 mins", badge: "" },
  { id: "full",     icon: "Sparkles", title: "Full Detail",      description: "Complete inside-out transformation. Clay bar, wax, tire shine, and deep cleanup", duration: "1.5 hours", badge: "Popular" },
  { id: "ceramic",  icon: "Shield",   title: "Ceramic Coat",     description: "Professional-grade nano-ceramic protection lasting up to 3 years", duration: "3 hours", badge: "Premium" }
];



export const PACKAGES = [
  {
    id: "basic", name: "Basic", price: 19, unit: "/wash",
    description: "Perfect for regular maintenance",
    features: ["Exterior wash & rinse","Wheel cleaning","Air dry & vacuum","Window cleaning"],
    cta: "Get Started", highlighted: false,
  },
  {
    id: "premium", name: "Premium", price: 49, unit: "/wash",
    description: "Our most popular package",
    features: ["Everything in Basic","Interior detail & vacuum","Leather/fabric treatment","Tire shine & dressing","Fragrance treatment","Hand dry finish"],
    cta: "Book Now", highlighted: true,
  },
  {
    id: "ultimate", name: "Ultimate", price: 129, unit: "/detail",
    description: "Showroom-quality results",
    features: ["Everything in Premium","Clay bar decontamination","Hand wax & polish","Engine bay cleaning","Headlight restoration","Ceramic sealant"],
    cta: "Book Now", highlighted: false,
  },
];

export const STEPS = [
  { step: "01", title: "Book Online",  description: "Choose your service and pick a time slot. No waiting, no surprises." },
  { step: "02", title: "Drop Off",     description: "Pull up to our facility. Our team greets you and does a walk-around inspection." },
  { step: "03", title: "We Work",      description: "Relax in our lounge or grab a coffee while our experts transform your vehicle." },
  { step: "04", title: "Drive Off",    description: "Get notified when ready. Inspect the results, then hit the road looking flawless." },
];
export const HOW_IT_WORKS = STEPS;

export const REVIEWS = [
  { id: 1, name: "Marcus T.",  handle: "@marcust_la",      avatar: "M", rating: 5, text: "The ceramic coating on my Model S is absolutely stunning. Six months later and water still beads off like magic. Worth every penny." },
  { id: 2, name: "Priya K.",   handle: "@priya.drives",    avatar: "P", rating: 5, text: "I've tried every car wash in the city. Aqua Luxe is on another level — the interior detail made my 3-year-old SUV look brand new." },
  { id: 3, name: "Jordan L.",  handle: "@jlux_auto",       avatar: "J", rating: 5, text: "Booking was effortless, they were done 20 minutes early, and the results? My blacked-out BMW has never looked this clean." },
  { id: 4, name: "Sofia R.",   handle: "@sofiar_official", avatar: "S", rating: 5, text: "Monthly member here and I'm not going anywhere. The team remembers my name and my car preferences. Real white-glove service." },
  { id: 5, name: "Kenji M.",   handle: "@kenjimoto",       avatar: "K", rating: 5, text: "Brought my Porsche here for the first time. The detailer walked me through every step. Incredible attention to paint correction." },
  { id: 6, name: "Aaliyah W.", handle: "@aaliyahw",        avatar: "A", rating: 5, text: "The lounge is so nice I almost didn't want to leave. And my car came out immaculate. This is what car care should feel like." },
];

export const STATS = [
  { value: "12K+", label: "Happy Customers"  },
  { value: "4.9★", label: "Average Rating"   },
  { value: "99%",  label: "Satisfaction Rate" },
  { value: "8yrs", label: "In Business"       },
];
