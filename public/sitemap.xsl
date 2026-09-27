<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>Vishyx Techie — Sitemap</title>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, "IBM Plex Sans", Segoe UI, sans-serif; background: #F5F2EA; color: #1C1C1A; margin: 0; padding: 40px; }
          h1 { font-family: Georgia, serif; color: #16233E; margin-bottom: 4px; }
          p.count { color: #5B5B54; margin-top: 0; }
          table { width: 100%; border-collapse: collapse; background: #FBFAF6; border: 1px solid #DAD5C6; border-radius: 8px; overflow: hidden; }
          th { text-align: left; background: #16233E; color: #F5F2EA; padding: 12px 16px; font-size: 13px; }
          td { padding: 12px 16px; border-top: 1px solid #DAD5C6; font-size: 14px; }
          tr:hover td { background: #F5F2EA; }
          a { color: #96692A; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>Vishyx Techie — Sitemap</h1>
        <p class="count">
          <xsl:value-of select="count(sitemap:urlset/sitemap:url)" /> URLs
        </p>
        <table>
          <tr>
            <th>URL</th>
            <th>Last modified</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td>
                <a href="{sitemap:loc}">
                  <xsl:value-of select="sitemap:loc" />
                </a>
              </td>
              <td><xsl:value-of select="sitemap:lastmod" /></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
