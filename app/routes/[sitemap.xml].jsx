export const loader = () => {
  // handle "GET" request
  // separating xml content from Response to keep clean code.
  const content = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <url>
      <loc>https://www.venturacodeand.coffee/</loc>
      <lastmod>2022-09-20T14:50:19+00:00</lastmod>
      <priority>1.00</priority>
    </url>
    <url>
      <loc>https://www.venturacodeand.coffee/conduct</loc>
      <lastmod>2022-09-20T14:50:19+00:00</lastmod>
      <priority>0.80</priority>
    </url>
  </urlset>
    `
  // Return the response with the content, a status 200 message, and the appropriate headers for an XML page
  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      encoding: 'UTF-8',
    },
  })
}
