import { services, products } from "@/lib/content";

const BASE_URL = "https://vishyxtechie.in";

export default function sitemap() {
  // Keep `lastModified` truthful rather than changing every time the sitemap is requested.
  const lastModified = new Date("2026-09-27T00:00:00.000Z");

  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/products", priority: 0.8, changeFrequency: "weekly" },
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", priority: 0.2, changeFrequency: "yearly" },
    { path: "/cookie-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/disclaimer", priority: 0.2, changeFrequency: "yearly" },
    { path: "/refund-policy", priority: 0.2, changeFrequency: "yearly" },
  ];

  const serviceRoutes = services.map((s) => ({
    path: `/services/${s.slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const productRoutes = products.map((p) => ({
    path: `/products/${p.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  return [...staticRoutes, ...serviceRoutes, ...productRoutes].map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
