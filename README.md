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
uxweb
├── src/
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
├── Diseños # Se encuentra detallado los diseños que hizo cada uno de los integrantes del grupo
├── README
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
cd uxweb

# Instalar dependencias
npm install
```


## Herramientas de Desarrollo

```bash
# Ejecutar en modo desarrollo
ng serve

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
