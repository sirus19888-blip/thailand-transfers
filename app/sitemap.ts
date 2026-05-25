import type { MetadataRoute } from "next";

const baseUrl = "https://thailand-transfers.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/routes/bangkok-airport-to-pattaya`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/routes/don-mueang-airport-to-pattaya`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/routes/bangkok-airport-to-pattaya/details`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/routes/pattaya-to-bangkok-airport`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/routes/pattaya-to-don-mueang-airport`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/routes/hua-hin-to-bangkok`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/routes/bangkok-to-hua-hin`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/routes/suvarnabhumi-airport-to-hua-hin`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/routes/don-mueang-airport-to-hua-hin`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/routes/koh-phi-phi-to-phuket`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/routes/koh-chang-to-bangkok`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/routes/koh-chang-to-suvarnabhumi-airport`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/routes/suvarnabhumi-airport-to-koh-chang`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/routes/surat-thani-airport-to-koh-samui`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/routes/koh-samui-to-surat-thani-airport`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/routes/phuket-airport-to-patong-beach`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/routes/patong-beach-to-phuket-airport`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/routes/phuket-airport-to-kata-karon`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
{
    url: `${baseUrl}/routes/krabi-airport-to-ao-nang`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/routes/ao-nang-to-krabi-airport`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/routes/phuket-to-koh-phi-phi`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/routes/krabi-to-koh-phi-phi`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/routes/koh-phi-phi-to-krabi`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  },
{
    url: `${baseUrl}/routes/surat-thani-airport-to-koh-phangan`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/routes/koh-phangan-to-surat-thani-airport`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/routes/bangkok-to-chiang-mai`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/routes/chiang-mai-to-bangkok`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  },
];
}


