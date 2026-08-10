import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { ArrowLeft, Clock, Share2, BedDouble, Check } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [
    { slug: "como-elegir-colchon" },
    { slug: "resorte-vs-espuma" },
    { slug: "medidas-colchon" },
    { slug: "cuidar-colchon" },
    { slug: "almohada-correcta" },
    { slug: "temperatura-descanso" },
  ];
}

type Params = Promise<{ slug: string }>;

const articles: Record<string, {
  title: string;
  category: string;
  readTime: string;
  description: string;
  content: string;
}> = {
  "como-elegir-colchon": {
    title: "Cómo Elegir el Colchón Perfecto para Vos",
    category: "Guía de Compra",
    readTime: "8 min",
    description: "Todo lo que necesitás saber para tomar la mejor decisión.",
    content: `
## Factores Clave al Elegir un Colchón

Elegir un colchón es una decisión importante: pasamos aproximadamente un tercio de nuestra vida durmiendo. Un colchón inadecuado puede causar dolores de espalda, insomnio y fatiga crónica.

### 1. Firmeza según tu peso y postura

- **Dormís de lado:** necesitás un colchón más suave (media firmeza) para que hombros y caderas se hundan naturalmente.
- **Dormís boca arriba:** firmeza media es ideal para mantener la curva natural de la columna.
- **Dormís boca abajo:** optá por un colchón firme que evite que la zona lumbar se hunda.
- **Peso hasta 70 kg:** suave a medio. **70-100 kg:** medio. **Más de 100 kg:** firme a extra firme.

### 2. Tipo de tecnología

| Tecnología | Ideal para | Ventaja principal |
|---|---|---|
| Resorte Bonell | Personas de peso medio | Buena ventilación |
| Resorte LFK | Quienes buscan firmeza | Soporte uniforme |
| Resorte Ensacado | Parejas con distinto peso | Movimiento independiente |
| Espuma de alta densidad | Habitaciones húmedas | Resistente a la humedad |
| Viscoelástica | Alivio de presión | Se adapta al cuerpo |

### 3. Tamaño adecuado

Medí tu habitación y dejá al menos 60 cm de paso alrededor del colchón. Si dormís en pareja, un mínimo de 1.40m de ancho es recomendable.

### 4. Presupuesto real

Un buen colchón es una inversión en salud. En Superspuma ofrecemos opciones desde Gs. 800.000 con garantía de hasta 10 años. Considerá la financiación en cuotas sin interés.

### Conclusión

No existe un "mejor colchón" universal. El ideal depende de tu cuerpo, tus hábitos y tu presupuesto. Visité nuestro showroom para probar diferentes opciones con asesoramiento personalizado.
    `,
  },
  "resorte-vs-espuma": {
    title: "Colchón de Resorte vs Espuma: ¿Cuál Elegir?",
    category: "Comparativa",
    readTime: "6 min",
    description: "Ventajas y desventajas de cada tecnología.",
    content: `
## Dos tecnologías, diferentes beneficios

Tanto los colchones de resorte como los de espuma tienen ventajas únicas. La elección depende de tus necesidades específicas.

### Colchones de Resorte

**Cómo funcionan:** Sistema de resortes metálicos que proporcionan soporte y elasticidad.

**Ventajas:**
- Excelente ventilación y transpirabilidad
- Mayor durabilidad (8-12 años)
- Amortiguación progresiva
- Amplia gama de firmeza
- Ideales para climas cálidos como el nuestro

**Tecnologías disponibles en Superspuma:**
- **Bonell:** Resortes interconectados, soporte clásico
- **LFK:** Resortes de hilo continuo, máxima firmeza
- **Ensacado:** Cada resorte en bolsa individual, movimiento independiente

### Colchones de Espuma

**Cómo funcionan:** Bloques de espuma de diferentes densidades y firmezas.

**Ventajas:**
- Resistencia a la humedad
- Sin ruidos ni vibraciones
- Mayor firmeza uniforme
- Ideales para bases de madera

**Tecnologías disponibles en Superspuma:**
- **Espuma de alta densidad:** Soporte firme y duradero
- **Viscoelástica (memory foam):** Se adapta al calor del cuerpo
- **Doble confort:** Dos caradas con diferente firmeza

### Tabla Comparativa

| Característica | Resorte | Espuma |
|---|---|---|
| Transpirabilidad | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Durabilidad | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Aislamiento de movimiento | ⭐⭐⭐ (ensacado: ⭐⭐⭐⭐⭐) | ⭐⭐⭐⭐ |
| Firmeza uniforme | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Precio | Desde Gs. 1.200.000 | Desde Gs. 800.000 |
| Ideal para climas cálidos | ✅ | ⚠️ |

### Nuestra recomendación

Para el clima paraguayo, los colchones de resorte tienen ventaja en ventilación. Pero si buscás firmeza uniforme o tenés alergias, la espuma es excelente. Lo mejor: visitá nuestra tienda y probá ambos.
    `,
  },
  "medidas-colchon": {
    title: "Guía de Medidas: Encontrá el Tamaño Correcto",
    category: "Guía Práctica",
    readTime: "5 min",
    description: "Tabla completa de medidas para no equivocarte.",
    content: `
## Medidas de Colchones en Paraguay

Elegir la medida correcta es fundamental. Un colchón demasiado chico incomoda, y uno demasiado grande puede no caber en tu habitación.

### Tabla de Medidas Estándar

| Nombre | Ancho | Largo | Para quién |
|---|---|---|---|
| 1 Plaza | 80-90 cm | 190 cm | Niños, solteros |
| 1½ Plaza | 100-120 cm | 190 cm | Adolescentes, solteros |
| 2 Plazas | 140-150 cm | 190-200 cm | Parejas jóvenes |
| Queen | 160 cm | 200 cm | Parejas |
| King | 180-200 cm | 200 cm | Parejas + niños/ mascotas |

### Cómo medir tu espacio

1. **Medí la habitación** completa (largo × ancho)
2. **Restá 60 cm** de cada lado para circulación
3. **Dejá espacio** para mesas de luz (mínimo 50 cm por lado)
4. **Considerá** puertas y ventanas al abrir

### Consejos prácticos

- Si dormís en pareja y tenés espacio, optá siempre por Queen o King
- Para habitaciones de invitados, 1½ plaza es suficiente
- Los colchones Superspuma vienen en medidas estándar y a medida
- Verificá que la base/somier coincida con la medida del colchón

### Medidas especiales

¿Necesitás una medida no estándar? En Superspuma fabricamos colchones a medida. Consultanos por Messaging.
    `,
  },
  "cuidar-colchon": {
    title: "7 Tips para Cuidar tu Colchón",
    category: "Cuidado",
    readTime: "4 min",
    description: "Consejos prácticos para maximizar la vida útil.",
    content: `
## Hacé que tu colchón dure más de 10 años

Un colchón bien cuidado puede durar entre 8 y 12 años. Seguí estos consejos para proteger tu inversión.

### 1. Rotá tu colchón cada 3 meses

Giralo 180° (cabeza a pies) y voltealo si es de doble cara. Esto distribuye el desgaste uniformemente.

### 2. Usá un protector de colchón

Un cubrecolchón impermeable protege contra derrames, ácaros y bacterias. Es la inversión más rentable para tu colchón.

### 3. Ventilá regularmente

Dejá el colchón descubierto 30 minutos por semana. Esto elimina humedad acumuada y previene hongos.

### 4. No saltes sobre el colchón

Evitá que niños (o adultos) salten. Esto daña los resortes y la estructura interna.

### 5. Limpiá manchas de inmediato

Usá un paño húmedo con jabón neutro. Nunca satures el colchón con líquido. Secá con secador en temperatura baja.

### 6. Aspirá mensualmente

Pasar la aspiradora sobre la superficie elimina ácaros, piel muerta y partículas de polvo.

### 7. Verificá la base

Un somier o base en mal estado arruina cualquier colchón. Asegurate de que esté nivelado y sin hundimientos.

### ¿Cuándo cambiar tu colchón?

- Se nota hundimiento visible (>2 cm)
- Despertás con dolores de espalda
- Tiene más de 8-10 años
- Hace ruidos al moverte (resortes)
- Se perciben olores persistentes
    `,
  },
  "almohada-correcta": {
    title: "Cómo Elegir la Almohada Correcta",
    category: "Guía de Compra",
    readTime: "5 min",
    description: "Cada postura necesita una almohada diferente.",
    content: `
## La almohada importa tanto como el colchón

Una almohada incorrecta puede causar dolor cervical, tensión en los hombros y mal descanso, incluso con el mejor colchón.

### Según tu postura al dormir

#### Dormís de lado
- Necesitás una almohada **alta y firme** (12-14 cm)
- Debe llenar el espacio entre el hombro y la oreja
- Recomendada: **Hipersoft** de Superspuma

#### Dormís boca arriba
- Elegí una almohada **media** (8-10 cm)
- Debe mantener la cabeza alineada con la columna
- Recomendada: **Viscoelástica** de Superspuma

#### Dormís boca abajo
- Optá por una almohada **suave y baja** (6-8 cm)
- O incluso dormí sin almohada
- Recomendada: **Silicon** de Superspuma

### Tipos de relleno

| Tipo | Firmeza | Duración | Lavable |
|---|---|---|---|
| Fibra de silicon | Suave | 2-3 años | ✅ |
| Espuma viscoelástica | Media-Firme | 3-4 años | ❌ |
| Microfibra hipersoft | Muy suave | 2-3 años | ✅ |
| Espuma polyuretano | Firme | 3-4 años | ❌ |

### Cuándo reemplazar tu almohada

- Se siente plana o sin soporte
- Tiene manchas amarillas persistentes
- Despertás con dolor cervical
- Tiene más de 2-3 años de uso
    `,
  },
  "temperatura-descanso": {
    title: "Temperatura y Descanso: El Secreto del Buen Sueño",
    category: "Bienestar",
    readTime: "6 min",
    description: "Optimizá tu entorno para un descanso perfecto.",
    content: `
## La temperatura afecta tu sueño más de lo que pensás

La ciencia demuestra que la temperatura corporal y ambiental son factores clave en la calidad del sueño.

### La temperatura ideal para dormir

La temperatura óptima del dormitorio es entre **18°C y 22°C**. En Paraguay, donde las noches pueden superar los 28°C, esto es un desafío.

### Cómo el colchón afecta la temperatura

- **Resorte:** Excelente ventilación natural, ideal para climas cálidos
- **Espuma:** Retiene más calor, mejor para ambientes con aire acondicionado
- **Viscoelástica:** Se adapta al calor corporal, puede ser cálida

### Tips para dormir mejor en el calor paraguayo

1. **Elegí colchón de resorte** — la mejor ventilación para nuestro clima
2. **Usá sábanas de algodón** — transpirables y frescas
3. **Duchate tibia antes de dormir** — baja la temperatura corporal
4. **Ventilá el dormitorio** durante el día
5. **Usá ventilador o aire** las primeras horas de la noche
6. **Protector de colchón transpirable** — evita acumulación de calor y humedad

### ¿Por qué despertás sudando?

Si despertás transpirando, puede ser:
- Colchón que retiene demasiado calor (espuma densa)
- Dormitorio sin ventilación adecuada
- Colchón viejo que perdió transpirabilidad

**Solución:** Considerá cambiar a un colchón de resorte ensacado, que ofrece el mejor balance entre soporte y ventilación.
    `,
  },
};

export default async function BlogArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  const contentLines = article.content.trim().split("\n");

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#0F1624] text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Volver al Blog
          </Link>
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
            <span className="bg-white/10 px-2 py-1 rounded">{article.category}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime} de lectura</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{article.title}</h1>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg prose-headings:text-[#0F1624] prose-p:text-gray-700 prose-a:text-[#0F1624] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#0F1624] prose-table:text-sm">
        {contentLines.map((line, i) => {
          if (line.startsWith("## ")) return <h2 key={i} className="text-2xl font-bold mt-10 mb-4">{line.replace("## ", "")}</h2>;
          if (line.startsWith("### ")) return <h3 key={i} className="text-xl font-semibold mt-8 mb-3">{line.replace("### ", "")}</h3>;
          if (line.startsWith("#### ")) return <h4 key={i} className="text-lg font-semibold mt-6 mb-2">{line.replace("#### ", "")}</h4>;
          if (line.startsWith("| ")) return null; // handled by table block
          if (line.startsWith("---")) return <hr key={i} className="my-8 border-gray-200" />;
          if (line.startsWith("- **")) {
            const m = line.match(/- \*\*(.+?)\*\*:?\s*(.*)/);
            if (m) return <div key={i} className="flex items-start gap-2 my-1"><Check className="w-4 h-4 text-green-600 mt-1 shrink-0" /><span><strong>{m[1]}</strong>{m[2] ? `: ${m[2]}` : ""}</span></div>;
          }
          if (line.startsWith("- ")) return <div key={i} className="flex items-start gap-2 my-1"><span className="w-1.5 h-1.5 bg-[#0F1624] rounded-full mt-2 shrink-0" /><span>{line.replace("- ", "")}</span></div>;
          if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ") || line.startsWith("4. ") || line.startsWith("5. ") || line.startsWith("6. ") || line.startsWith("7. ")) {
            const num = line.match(/^(\d+)\.\s/);
            const text = line.replace(/^\d+\.\s/, "");
            return <div key={i} className="flex items-start gap-2 my-1"><span className="w-6 h-6 bg-[#0F1624] text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">{num?.[1]}</span><span>{text}</span></div>;
          }
          if (line.trim() === "") return <div key={i} className="h-2" />;
          return <p key={i} className="my-3">{line}</p>;
        })}

        {/* Render tables */}
        {(() => {
          const tables: React.ReactNode[] = [];
          let inTable = false;
          let rows: string[] = [];
          let tableIdx = 0;

          contentLines.forEach((line, i) => {
            if (line.startsWith("| ") && !line.startsWith("| ---")) {
              if (!inTable) { inTable = true; rows = []; }
              rows.push(line);
            } else if (inTable) {
              inTable = false;
              const header = rows[0].split("|").filter(c => c.trim());
              const bodyRows = rows.slice(2);
              tables.push(
                <div key={`t${tableIdx++}`} className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#0F1624] text-white">
                        {header.map((h, j) => <th key={j} className="px-4 py-2 text-left text-sm">{h.trim()}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {bodyRows.map((r, j) => (
                        <tr key={j} className="border-b border-gray-200 even:bg-gray-50">
                          {r.split("|").filter(c => c.trim()).map((c, k) => <td key={k} className="px-4 py-2 text-sm">{c.trim()}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
          });
          return tables;
        })()}
      </article>

      {/* CTA */}
      <section className="py-12 bg-[#EFF2F7]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-[#0F1624] mb-3">¿Listo para elegir tu colchón ideal?</h3>
          <p className="text-gray-600 mb-6">Probá nuestros colchones en cualquiera de las 15 sucursales.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/tienda" className="inline-flex items-center justify-center gap-2 bg-[#0F1624] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3A4A5D] transition-colors">Ver Catálogo</Link>
            <a href="tel:+595974202025?text=Hola,%20leí%20el%20artículo%20y%20quiero%20asesoramiento" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">Consultar por Messaging</a>
          </div>
        </div>
      </section>
    </main>
  );
}
