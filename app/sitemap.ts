import { MetadataRoute } from "next"

const base = "https://superspuma.paragu-ai.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `https://superspuma.paragu-ai.com/admin/content`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ]
}
