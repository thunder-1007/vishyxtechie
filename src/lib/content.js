// Static content, structured to match the Appwrite collections in
// Vishyx-Techie-Admin-Panel-Spec.md. Once Appwrite is wired up, these
// exports get replaced with fetches from the DB — the shape stays the same.
//
// `photoId` values are Lorem Picsum (picsum.photos) IDs — real,
// royalty-free photography, free for commercial use with no attribution
// required (https://picsum.photos/). Swap these for real company photos
// whenever you have them; the <Image> usage doesn't need to change.

export const siteSettings = {
  phone: "+91 90481 51630",
  email: "support@vishyxtechie.in",
};

export const services = [
  {
    slug: "custom-website-development",
    title: "Custom Website Development",
    summary:
      "Static sites for simple needs, or dynamic, database-backed sites when your content changes often.",
    headline: "A website that does its job — nothing more, nothing less.",
    body: "We build static websites for businesses that need a clean, fast, reliable presence, and dynamic websites for businesses whose content — prices, listings, bookings — changes regularly. Either way, you get a site that's fast to load, easy to update, and built to rank.",
    who: "New businesses that need to launch fast, and growing businesses that have outgrown a template site.",
    photoId: "180",
    startingPrice: "₹18,000",
    features: [
      "Mobile-first, responsive on every device",
      "Built-in SEO foundations (meta tags, sitemap, schema)",
      "Fast load times — optimized images, minimal scripts",
      "Easy content updates without touching code",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Appwrite", "Netlify"],
    steps: [
      "Discovery call — what the site needs to do, for whom",
      "Design (using your brand or ours, built from scratch either way)",
      "Build — static or dynamic, based on your needs",
      "Review and revisions",
      "Launch + handover (with admin access if it's dynamic)",
    ],
  },
  {
    slug: "ecommerce-web-solutions",
    title: "E-Commerce Web Solutions",
    summary:
      "Online stores built to convert browsers into buyers, from product pages to checkout.",
    headline: "An online store built to sell, not just to look good.",
    body: "We build product pages that answer buyers' questions before they ask, checkout flows with fewer drop-off points, and back-end tools so you can manage inventory and orders without calling a developer every time something changes.",
    who: "Businesses selling physical or digital products online — first store or a rebuild of an underperforming one.",
    photoId: "26",
    startingPrice: "₹35,000",
    features: [
      "Secure checkout with major payment gateways",
      "Inventory & order management dashboard",
      "Product search, filters, and reviews",
      "Abandoned-cart recovery emails",
    ],
    techStack: ["Next.js", "Appwrite", "Razorpay/Stripe", "Cloudinary"],
    steps: [
      "Discovery",
      "Catalog & checkout design",
      "Payment gateway integration",
      "Testing",
      "Launch → post-launch support",
    ],
  },
  {
    slug: "saas-web-app-development",
    title: "Web App Development — SaaS",
    summary:
      "Full software products, built to scale from your first ten users to your ten-thousandth.",
    headline: "From idea to a product people pay for.",
    body: "We build SaaS products end to end — the parts users see and the infrastructure behind them. Built to handle your first users without over-engineering for a scale you're not at yet, and built to scale when you get there.",
    who: "Founders and businesses building a software product, not just a website.",
    photoId: "60",
    startingPrice: "Custom scope",
    features: [
      "Multi-tenant architecture from day one",
      "Subscription billing & usage limits built in",
      "Role-based access control",
      "API-first, so you can extend it later",
    ],
    techStack: ["Next.js", "Appwrite", "Node.js", "Docker"],
    steps: [
      "Discovery & architecture",
      "MVP scoping",
      "Build in sprints",
      "Testing",
      "Launch → ongoing iteration",
    ],
  },
  {
    slug: "custom-software-development-maintenance",
    title: "Custom Software Development & Maintenance",
    summary:
      "Internal tools and business software, built around how your team actually works, kept running long after launch.",
    headline: "Software built around how your team actually works.",
    body: "Off-the-shelf tools force your process to fit their workflow. We build the reverse — software shaped around your business — and keep it maintained so it doesn't quietly break six months after launch.",
    who: "Businesses with a process that doesn't fit into a generic tool.",
    photoId: "119",
    startingPrice: "Custom scope",
    features: [
      "Built around your existing workflow, not a template",
      "Integrates with tools you already use",
      "Ongoing maintenance & bug-fix plans",
      "Documentation & handover included",
    ],
    techStack: ["Node.js", "Appwrite", "PostgreSQL/MariaDB", "Docker"],
    steps: [
      "Discovery of current process",
      "Architecture & scoping",
      "Build",
      "Testing",
      "Launch + ongoing maintenance plan",
    ],
  },
  {
    slug: "android-ios-app-development",
    title: "Android / iOS Application Development",
    summary:
      "Native and cross-platform apps for reaching customers on their phones.",
    headline: "Reach customers wherever they are.",
    body: "We build native and cross-platform mobile apps — from a companion app for your existing website to a standalone product. Built for performance, tested across devices, and published to the app stores on your behalf.",
    who: "Businesses that need a mobile presence, not just a mobile-friendly website.",
    photoId: "96",
    startingPrice: "₹60,000",
    features: [
      "One codebase for Android & iOS (or fully native)",
      "Push notifications & offline support",
      "App store submission handled for you",
      "Analytics & crash reporting built in",
    ],
    techStack: ["React Native", "Appwrite", "Firebase", "Expo"],
    steps: [
      "Discovery",
      "UX/UI design",
      "Build (native or cross-platform)",
      "Testing across devices",
      "App store submission & launch",
    ],
  },
  {
    slug: "digital-marketing-branding",
    title: "Digital Marketing and Branding",
    summary:
      "SEO, content, and brand identity that get the right people to notice you.",
    headline: "Get found by the people already looking for you.",
    body: "SEO that's built into your site from day one, content that answers real customer questions, and a brand identity that's consistent everywhere your business shows up — website, social, print.",
    who: "Any business that needs more of the right people finding them online.",
    photoId: "48",
    startingPrice: "₹12,000/mo",
    features: [
      "Keyword research & on-page SEO",
      "Content calendar & blog writing",
      "Brand identity: logo, colors, guidelines",
      "Monthly performance reporting",
    ],
    techStack: ["Search Console", "GA4", "Ahrefs", "Canva/Figma"],
    steps: [
      "Audit of current presence",
      "Strategy & keyword mapping",
      "Content & brand asset creation",
      "Implementation",
      "Ongoing reporting & iteration",
    ],
  },
  {
    slug: "power-bi-dashboard-development",
    title: "Power BI Dashboard Development",
    summary: "Live, decision-ready dashboards that turn scattered business data into clear actions.",
    headline: "Stop reporting what happened. Start seeing what to do next.",
    body: "A Power BI dashboard brings sales, finance, operations, and customer data into one reliable view. Instead of waiting for manual spreadsheets, leaders can spot performance changes, drill into the cause, and make decisions from a shared set of numbers.",
    who: "Teams that rely on spreadsheets, several disconnected systems, or weekly reporting to understand business performance.",
    photoId: "1",
    startingPrice: "₹30,000",
    features: [
      "Data modelling that creates one trusted version of every metric",
      "Interactive KPI, trend, map, and drill-through dashboard pages",
      "Secure refreshes from Excel, SQL, APIs, and business systems",
      "Role-based access so every team sees the right level of detail",
    ],
    techStack: ["Power BI", "DAX", "Power Query", "SQL", "Excel", "REST APIs"],
    steps: [
      "Metric workshop: decide the questions leaders need answered",
      "Data audit and source connection",
      "Model and dashboard design",
      "Validation with your team",
      "Publish, train users, and improve with real usage",
    ],
    why: "Without a shared dashboard, teams spend time reconciling numbers instead of acting on them. A well-designed dashboard gives everyone the same view of revenue, costs, delivery, and customer health.",
    outcomes: ["Faster weekly and monthly reviews", "Fewer manual spreadsheet updates", "Earlier visibility into risks and opportunities", "Clear ownership of business KPIs"],
    useCases: ["Sales pipeline and conversion tracking", "Finance and cash-flow reporting", "Inventory and operations monitoring", "Customer, marketing, and retention analytics"],
    visual: "dashboard",
  },
];

export const packages = [
  {
    name: "Starter",
    subtitle: "Launch Package",
    price: "₹25,000 onwards",
    recommended: false,
    features: [
      "Domain + 1 year hosting",
      "Basic website (up to 5 pages)",
      "Standard SEO setup",
      "Google Business Profile setup",
      "Google Workspace setup",
      "1 round of revisions",
    ],
    badge: "Best for new businesses",
  },
  {
    name: "Growth",
    subtitle: "Business Package",
    price: "₹65,000 onwards",
    recommended: true,
    features: [
      "Everything in Starter",
      "Up to 12 pages / dynamic CMS site",
      "Advanced SEO + blog setup",
      "Basic e-commerce or booking integration",
      "Analytics + Search Console setup",
      "3 rounds of revisions",
    ],
    badge: "Most popular",
  },
  {
    name: "Scale",
    subtitle: "Custom Engagement",
    price: "Custom quote",
    recommended: false,
    features: [
      "Discovery + architecture call",
      "Custom scope: web app / mobile app / software",
      "Dedicated project manager",
      "Ongoing maintenance & support plan",
    ],
    badge: "For SaaS & custom software",
  },
];

export const products = [
  {
    slug: "fomriva",
    name: "Fomriva",
    tagline: "Automate the processes that run your business.",
    body: "Fomriva is built to take the repetitive, manual parts of running a business off your plate — so your team spends time on customers, not admin. Think automated approvals, task handoffs, and status tracking that currently live in someone's head or a spreadsheet.",
    status: "In Development",
    photoId: "1",
  },
  {
    slug: "billing-pos",
    name: "Billing & POS Software",
    tagline: "Billing and point-of-sale, built simple.",
    body: "A billing and POS system designed for how small and growing businesses actually sell — quick setup, clear reporting, nothing you don't need. Built for counters, not corporations.",
    status: "In Development",
    photoId: "20",
  },
];

export const faqs = [
  {
    q: "Do you only build websites, or do you build software too?",
    a: "Both. Websites and e-commerce are part of what we do, alongside SaaS products, custom software, and mobile apps.",
  },
  {
    q: "What's included in the Starter package?",
    a: "Domain and hosting, a basic website, standard SEO setup, Google Business Profile setup, and Google Workspace setup. Full breakdown on the Pricing page.",
  },
  {
    q: "How long does a website take to launch?",
    a: "A Starter site typically launches within 7 days of final content being provided. Larger builds are scoped individually.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Yes — Starter, Growth, and Scale are designed to build on each other, not lock you in.",
  },
  {
    q: "Can I hire you for just one service instead of a package?",
    a: "Yes — every service on our Pricing page also has a starting price on its own, no package required.",
  },
  {
    q: "What are Fomriva and the Billing & POS software?",
    a: "Our own upcoming products, currently in development. Visit the Products page for details and to join the waitlist.",
  },
  {
    q: "Do you offer ongoing maintenance after launch?",
    a: "Yes — maintenance and support plans are available for both websites and custom software.",
  },
  {
    q: "What does Vishyx Techie use to build its own sites?",
    a: "Next.js, Tailwind CSS, and Appwrite Cloud — the same modern stack we recommend for client projects.",
  },
];
