# UxWeb - Proyecto de Maquetación Angular

Repositorio para la maquetación web en Angular basada en wireframes y diseños UX/UI.

## 📋 Descripción del Proyecto

Este proyecto tiene como objetivo implementar la maquetación de un diseño web utilizando Angular, siguiendo las mejores prácticas de UX/UI y manteniendo una estructura de código limpia y escalable.

## 🚀 Tecnologías Utilizadas

- **Angular** (Framework principal)
- **TypeScript** 
- **HTML5 & CSS3**
- **SCSS** (Preprocesador CSS)
- **Angular Material** (Componentes UI)
- **Bootstrap** (Grid System & Utilities)

## 📁 Estructura del Proyecto

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

## 🛠️ Instalación y Configuración

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

## 🎨 Guía de Desarrollo

### Convenciones de Nomenclatura
- **Componentes**: PascalCase (ej. `HeaderComponent`)
- **Archivos**: kebab-case (ej. `header-component.ts`)
- **Variables**: camelCase (ej. `isMenuOpen`)
- **Clases CSS**: kebab-case (ej. `.main-header`)

### Estructura de Componentes
```typescript
@Component({
  selector: 'app-component-name',
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.scss']
})
export class ComponentNameComponent implements OnInit {
  // Propiedades
  // Constructor
  // Métodos del ciclo de vida
  // Métodos personalizados
}
```

## 📱 Responsive Design

El proyecto sigue un enfoque **Mobile First** con los siguientes breakpoints:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## 🎯 Implementación de Wireframes

### Fase 1: Componentes Base
- [ ] Header/Navigation
- [ ] Footer
- [ ] Sidebar (si aplica)
- [ ] Layout principal

### Fase 2: Páginas Principales
- [ ] Landing Page
- [ ] Página de servicios
- [ ] Página de contacto
- [ ] Página about

### Fase 3: Componentes Avanzados
- [ ] Formularios
- [ ] Cards/Tarjetas
- [ ] Modales
- [ ] Carousel/Slider

## 📊 Herramientas de Desarrollo

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

## 🎨 Guía de Estilos

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

## 📝 Documentación Adicional

- `/wireframes/` - Contiene los wireframes originales
- `/docs/` - Documentación técnica adicional
- `/style-guide/` - Guía de estilos detallada

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

**Desarrollador**: Sebastian Betancourt
**GitHub**: [@sebastian-blip](https://github.com/sebastian-blip)

---

⭐ Si este proyecto te resulta útil, ¡no olvides darle una estrella!