export default function sitemap() {
    return [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/produitsingle`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },
    ];
  }
  