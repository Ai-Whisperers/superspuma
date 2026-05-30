import { readFileSync, existsSync, readdirSync } from 'fs'
import path from 'path'

type JsonValue = string | number | boolean | null | JsonObject | JsonValue[]
interface JsonObject { [key: string]: JsonValue }

interface PageSection {
  id?: string
  variant?: string
  content?: string
}

interface PageConfig {
  id?: string
  slug?: string
  title?: string
  titleKey?: string
  sections?: Array<string | PageSection>
}

function getByPath(source: JsonObject, dottedPath?: string): JsonValue | undefined {
  if (!dottedPath) return undefined
  return dottedPath.split('.').reduce<JsonValue | undefined>((acc, key) => {
    if (!acc || typeof acc !== 'object' || Array.isArray(acc)) return undefined
    return (acc as JsonObject)[key]
  }, source)
}

function getContent(): JsonObject {
  const contentPath = path.join(process.cwd(), 'content', 'es.json')
  if (!existsSync(contentPath)) return {}
  return JSON.parse(readFileSync(contentPath, 'utf-8')) as JsonObject
}

function getPages(): Record<string, PageConfig> {
  const pagesDir = path.join(process.cwd(), 'pages')
  if (!existsSync(pagesDir)) return {}

  const pages: Record<string, PageConfig> = {}
  for (const file of readdirSync(pagesDir)) {
    if (!file.endsWith('.json')) continue
    const data = JSON.parse(readFileSync(path.join(pagesDir, file), 'utf-8')) as PageConfig
    pages[file.replace('.json', '')] = data
  }
  return pages
}

function renderSection(sectionData: JsonValue | undefined, sectionKey: string) {
  if (!sectionData) return null

  if (typeof sectionData === 'string') {
    return <p key={sectionKey} className="mx-auto max-w-5xl px-4 py-2 text-lg">{sectionData}</p>
  }

  if (Array.isArray(sectionData)) {
    return (
      <section key={sectionKey} className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sectionData.map((item, i) => (
            <div key={`${sectionKey}-${i}`} className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              {typeof item === 'object' && item && !Array.isArray(item) ? (
                <>
                  {'title' in item && <h3 className="mb-2 text-xl font-semibold">{String(item.title)}</h3>}
                  {'name' in item && !('title' in item) && <h3 className="mb-2 text-xl font-semibold">{String(item.name)}</h3>}
                  {'description' in item && <p className="text-sm opacity-90">{String(item.description)}</p>}
                  {'price' in item && <p className="mt-3 text-base font-bold">{String(item.price)}</p>}
                </>
              ) : (
                <p>{String(item)}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (typeof sectionData === 'object') {
    const data = sectionData as JsonObject
    const title = (data.headline || data.title || data.eyebrow || data.subtitle) as string | undefined
    const subtitle = data.subheadline as string | undefined
    return (
      <section key={sectionKey} className="mx-auto max-w-6xl px-4 py-8">
        {title && <h2 className="text-2xl font-bold md:text-4xl">{title}</h2>}
        {subtitle && <p className="mt-3 max-w-3xl text-base opacity-90 md:text-lg">{subtitle}</p>}
      </section>
    )
  }

  return null
}

export default function HomePage() {
  const content = getContent()
  const pages = getPages()
  const homePage = pages.home || pages.index || { id: 'home', sections: [] }

  const resolvedTitle =
    homePage.title ||
    (typeof getByPath(content, homePage.titleKey) === 'string' ? String(getByPath(content, homePage.titleKey)) : undefined) ||
    (typeof getByPath(content, 'home.seo.title') === 'string' ? String(getByPath(content, 'home.seo.title')) : undefined) ||
    'Superspuma'

  const sections = Array.isArray(homePage.sections) ? homePage.sections : []

  return (
    <main className="min-h-screen pb-20">
      <header className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <h1 className="text-3xl font-bold md:text-5xl">{resolvedTitle}</h1>
      </header>

      {sections.map((section, idx) => {
        const sectionDef = typeof section === 'string' ? ({ id: section, content: section } as PageSection) : section
        const contentPath = sectionDef?.content || sectionDef?.id
        const sectionData = getByPath(content, contentPath)
        return renderSection(sectionData, sectionDef?.id || `section-${idx}`)
      })}
    </main>
  )
}
