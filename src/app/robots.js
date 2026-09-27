export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/admin", "/api/"],
    },
    sitemap: "https://vishyxtechie.in/sitemap.xml",
    host: "https://vishyxtechie.in",
  };
}
