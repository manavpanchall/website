export default function robots() {
    return `
      User-agent: *
      Allow: /
      Disallow: /private/
  
      Sitemap: ${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml
    `;
  }
  