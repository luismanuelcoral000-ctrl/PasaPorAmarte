# Pasa Por Amarte — sitio web

Proyecto en **Next.js 14 (App Router) + Tailwind CSS + Framer Motion**.

## Cómo correrlo en tu computador

Necesitas tener [Node.js](https://nodejs.org) instalado (versión 18 o superior).

```bash
npm install
npm run dev
```

Luego abre [http://localhost:3000](http://localhost:3000) en tu navegador.

Para generar la versión de producción:

```bash
npm run build
npm run start
```

## Estructura del proyecto

```
app/
  layout.jsx              → estructura raíz, fuentes (Fraunces + Work Sans), Nav y botón flotante de WhatsApp
  page.jsx                → Home: ensambla todas las secciones
  nuestra-esencia/
    page.jsx              → página independiente "Nuestra esencia"
  globals.css              → estilos base

components/
  Nav.jsx                  → navegación fija + menú móvil
  Hero.jsx                 → sección de bienvenida a pantalla completa
  MiHistoria.jsx            → historia, galería y frases
  ComoTeAcompano.jsx        → texto + fotografía
  EligeTuCamino.jsx         → las 5 tarjetas de servicios con el sendero (elemento distintivo)
  Impacto.jsx                → impacto social
  Recursos.jsx               → tarjetas de recursos futuros
  Agenda.jsx                  → llamado a la acción final
  Footer.jsx                   → pie de página
  WhatsappFloat.jsx            → botón flotante
  Reveal.jsx                    → animación de aparición al hacer scroll (usa Framer Motion)
```

## Dónde reemplazar los textos

Todos los textos pendientes están marcados como `[Espacio para...]` dentro de cada
componente, en párrafos con la clase `placeholder-text`. Búscalos y reemplázalos
directamente en el archivo `.jsx` correspondiente.

## Dónde cambiar las imágenes

Las imágenes actuales son fotografías de stock (Unsplash) usadas como marcador de
posición. Para reemplazarlas:

1. Coloca tus imágenes en `public/images/`.
2. Cambia el `src` en el componente correspondiente por, por ejemplo, `/images/mi-foto.jpg`.

## Personalizar colores y tipografía

Los tokens de diseño (colores, fuentes, radios de borde) están centralizados en
`tailwind.config.js`, dentro de `theme.extend`. Cambiarlos ahí actualiza todo el sitio.

## Contacto real (WhatsApp, teléfono, correo)

Edita `components/Footer.jsx` (correo y teléfono) y `components/WhatsappFloat.jsx`
(número de WhatsApp en el enlace `https://wa.me/...`).
