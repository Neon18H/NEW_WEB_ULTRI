# UltriAtech Website

Website enterprise de UltriAtech construido con Next.js 14, TypeScript, TailwindCSS y componentes base estilo shadcn/ui.

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

La app estará disponible en `http://localhost:3000`.

## Build de producción

```bash
npm run build
npm run start
```

## Estructura

- `app/`: rutas App Router (home, servicios, detalle, recursos, contacto).
- `components/`: secciones reutilizables, layout y UI base (shadcn-inspired).
- `lib/`: catálogo de servicios, datos de recursos y utilidades.

## Cómo agregar un servicio nuevo

1. Abre `lib/services.ts`.
2. Elige la categoría correspondiente en `serviceCategories` y agrega un objeto `Service` dentro del array `services`.
3. Completa los campos obligatorios (`slug`, `title`, `summary`, `overview`, `deliverables`, etc.).
4. El nuevo servicio aparecerá automáticamente en:
   - `/servicios`
   - `/servicios/[categoria]`
   - `/servicios/[categoria]/[slug]`

## Notas

- El formulario de contacto no envía datos a un backend; está listo para conectar con un endpoint.
- Los datos de contacto son placeholders y deben reemplazarse con información real.
