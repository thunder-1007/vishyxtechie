import { services } from "@/lib/content";

const BASE_URL = "https://www.vishyxtechie.in";

const staticRoutes = [
  "",
  "/services",
  "/pricing",
  "/products",
  "/about",
  "/blog",
  "/contact",
  "/faq",
  "/privacy-policy",
  "/terms-and-conditions",
  "/cookie-policy",
  "/disclaimer",
  "/refund-policy",
];

export default function sitemap() {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const serviceEntries = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...serviceEntries];
}
