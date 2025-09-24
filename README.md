# UxWeb - Proyecto de Maquetación Angular

Repositorio para la maquetación web en Angular basada en wireframes y diseños UX/UI.

## Descripción del Proyecto

Este proyecto tiene como objetivo implementar la maquetación de un diseño web utilizando Angular, siguiendo las mejores prácticas de UX/UI y manteniendo una estructura de código limpia y escalable.

## Tecnologías Utilizadas

- **Angular** (Framework principal)
- **TypeScript** 
- **HTML5 & CSS3**
- **SCSS** (Preprocesador CSS)
- **Angular Material** (Componentes UI)
- **Bootstrap** (Grid System & Utilities)

## Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── header/
│   │   ├── footer/
│   │   ├── navigation/
│   │   └── shared/
│   ├── pages/              # Páginas principales
│   │   ├── home/
│   │   ├── about/
│   │   └── contact/
│   ├── services/           # Servicios Angular
│   ��── models/            # Interfaces y modelos
│   └── styles/            # Estilos globales
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
└── wireframes/            # Documentación de diseño
```

## Instalación y Configuración

### Prerrequisitos
- Node.js (v16 o superior)
- npm o yarn
- Angular CLI

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/sebastian-blip/UxWeb.git

# Navegar al directorio
cd UxWeb

# Instalar dependencias
npm install

# Instalar Angular CLI (si no está instalado)
npm install -g @angular/cli
```

### Configuración del proyecto
```bash
# Crear nuevo proyecto Angular
ng new uxweb-mockup --routing --style=scss

# Instalar Angular Material
ng add @angular/material

# Instalar Bootstrap
npm install bootstrap
```


## Herramientas de Desarrollo

```bash
# Ejecutar en modo desarrollo
ng serve

# Compilar para producción
ng build --prod

# Ejecutar tests
ng test

# Ejecutar linter
ng lint

# Generar componente
ng generate component components/component-name

# Generar servicio
ng generate service services/service-name
```

## Guía de Estilos

### Colores Principales
```scss
$primary-color: #your-primary-color;
$secondary-color: #your-secondary-color;
$accent-color: #your-accent-color;
$text-color: #333333;
$background-color: #ffffff;
```

### Tipografía
```scss
$font-family-primary: 'Your-Primary-Font', sans-serif;
$font-family-secondary: 'Your-Secondary-Font', serif;
```

## Documentación Adicional

- `/wireframes/` - Contiene los wireframes originales
- `/docs/` - Documentación técnica adicional
- `/style-guide/` - Guía de estilos detallada


---
