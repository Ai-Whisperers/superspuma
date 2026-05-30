import { MetadataRoute } from "next"
import raw from "@/content/es.json"

const base = "https://superspuma.paragu-ai.com"
const content = raw as any
const products = content.home?.productCatalog?.products || []

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${base}/tienda`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/maestre`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/promociones`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${base}/nosotros`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/tiendas`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/trabaja-con-nosotros`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/contacto`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/garantia`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.4 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${base}/privacidad`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${base}/terminos`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.2 },
  ]

  const productPages = products.map((p: any) => ({
    url: `${base}/producto/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const blogPages = [
    { slug: "como-elegir-colchon" },
    { slug: "resorte-vs-espuma" },
    { slug: "medidas-colchon" },
    { slug: "cuidar-colchon" },
    { slug: "almohada-correcta" },
    { slug: "temperatura-descanso" },
  ].map((b) => ({
    url: `${base}/blog/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...productPages, ...blogPages]
}
