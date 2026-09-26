export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin"],
      },
    ],
    sitemap: "https://www.vishyxtechie.in/sitemap.xml",
  };
}
