# 🎵 Academia Baile - Web Application

Una aplicación web moderna para la gestión de una academia de baile, construida con React, Vite, Material-UI y Tailwind CSS.

## 🚀 Características

### **Páginas Principales**
- **Landing Page** - Página de inicio con hero section y navegación
- **Clases** - Catálogo de clases disponibles con filtros
- **Detalle de Clase** - Información completa de cada clase
- **Instructores** - Lista de instructores con perfiles
- **Detalle de Instructor** - Perfil completo del instructor
- **Eventos** - Calendario de eventos y talleres
- **Contacto** - Formulario de contacto
- **Agenda** - Calendario visual de clases

### **Sistema de Usuarios**
- **Registro/Login** - Sistema de autenticación completo
- **Dashboard de Estudiante** - Panel personalizado con:
  - Niveles específicos por tipo de baile
  - Historial de clases inscritas
  - Registro de asistencias
  - Historial de pagos
- **Dashboard de Administrador** - Panel de gestión con:
  - Gestión de estudiantes
  - Control de asistencias
  - Historial de pagos
  - Estadísticas generales

### **Niveles por Baile**
- **Sistema flexible** de niveles por tipo de baile
- **Niveles:** Básico, Intermedio, Avanzado
- **Bailes soportados:** Salsa, Bachata, Merengue, Cha-cha-cha, Rumba/Timba
- **Escalable** para nuevos tipos de baile

## 🛠️ Tecnologías Utilizadas

### **Frontend**
- **React 18** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de construcción rápida
- **Material-UI (MUI)** - Componentes de UI
- **Tailwind CSS** - Framework de CSS utilitario
- **React Router v6** - Enrutamiento del lado del cliente

### **Estado y Datos**
- **React Context API** - Gestión de estado global
- **localStorage** - Persistencia de sesión
- **Mock Data** - Datos simulados para desarrollo

### **Herramientas de Desarrollo**
- **ESLint** - Linting de código
- **PostCSS** - Procesamiento de CSS
- **Autoprefixer** - Prefijos CSS automáticos

## 📁 Estructura del Proyecto

```
academia-baile/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── Navbar.jsx     # Barra de navegación
│   │   └── Footer.jsx     # Pie de página
│   ├── context/           # Contextos de React
│   │   └── AuthContext.jsx # Contexto de autenticación
│   ├── mockData/          # Datos simulados
│   │   ├── clases.js      # Datos de clases
│   │   ├── instructores.js # Datos de instructores
│   │   ├── eventos.js     # Datos de eventos
│   │   ├── horarios.js    # Datos de horarios
│   │   ├── usuarios.js    # Datos de usuarios
│   │   └── index.js       # Exportaciones centralizadas
│   ├── pages/             # Páginas de la aplicación
│   │   ├── LandingPage.jsx
│   │   ├── Clases.jsx
│   │   ├── ClaseDetalle.jsx
│   │   ├── Instructores.jsx
│   │   ├── InstructorDetalle.jsx
│   │   ├── Eventos.jsx
│   │   ├── Contacto.jsx
│   │   ├── Agenda.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   └── AdminDashboard.jsx
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada
│   ├── routes.jsx         # Configuración de rutas
│   ├── theme.js           # Tema de Material-UI
│   └── index.css          # Estilos globales
├── index.html             # HTML principal
├── package.json           # Dependencias y scripts
├── tailwind.config.js     # Configuración de Tailwind
├── postcss.config.js      # Configuración de PostCSS
├── vite.config.js         # Configuración de Vite
└── README.md              # Documentación
```

## 🚀 Instalación y Configuración

### **Prerrequisitos**
- Node.js (versión 16 o superior)
- npm o yarn

### **Instalación**

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd academia-baile
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

### **Scripts Disponibles**

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Construcción para producción
npm run preview      # Vista previa de producción
npm run lint         # Linting del código
```

## 🎨 Tema y Estilos

### **Paleta de Colores**
- **Primario:** Rosa vibrante (#E91E63)
- **Secundario:** Naranja (#FF9800)
- **Fondo:** Blanco y grises claros
- **Texto:** Gris oscuro (#333333)

### **Niveles de Baile**
- **Básico:** Gris (default)
- **Intermedio:** Azul (primary)
- **Avanzado:** Verde (success)

## 👥 Usuarios de Prueba

### **Estudiantes**
```javascript
// María García
email: "maria.garcia@email.com"
password: "password123"

// Carlos Rodríguez  
email: "carlos.rodriguez@email.com"
password: "password123"

// Ana Martínez
email: "ana.martinez@email.com"
password: "password123"
```

### **Administrador**
```javascript
email: "admin@academiabaile.com"
password: "admin123"
```

## 📱 Responsive Design

La aplicación está completamente optimizada para:
- **Móviles** (xs, sm)
- **Tablets** (md)
- **Desktop** (lg, xl)

### **Breakpoints**
- **xs:** 0px - 600px
- **sm:** 600px - 960px
- **md:** 960px - 1280px
- **lg:** 1280px - 1920px
- **xl:** 1920px+

## 🔄 Flujo de Desarrollo

### **Ramas del Repositorio**
- **`main`** - Código de producción
- **`dev`** - Desarrollo activo
- **`stg`** - Staging/testing

### **Workflow Recomendado**
1. **Desarrollo** en rama `dev`
2. **Testing** en rama `stg`
3. **Deploy** desde rama `main`

## 🚀 Deployment

### **Construcción para Producción**
```bash
npm run build
```

### **Vista Previa**
```bash
npm run preview
```

## 🔧 Configuración Avanzada

### **Variables de Entorno**
Crear archivo `.env.local`:
```env
VITE_API_URL=your-api-url
VITE_APP_NAME=Academia Baile
```

### **Personalización del Tema**
Editar `src/theme.js` para cambiar colores, tipografías y componentes.

## 📊 Características Técnicas

### **Performance**
- **Code Splitting** automático con React Router
- **Lazy Loading** de componentes
- **Optimización** de imágenes
- **Bundle** optimizado con Vite

### **Accesibilidad**
- **ARIA labels** en componentes interactivos
- **Navegación** por teclado
- **Contraste** de colores optimizado
- **Semántica** HTML correcta

### **SEO**
- **Meta tags** dinámicos
- **Títulos** de página optimizados
- **URLs** amigables
- **Sitemap** generado automáticamente

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **Desarrollador:** [Tu Nombre]
- **Email:** [tu-email@ejemplo.com]
- **Proyecto:** [https://github.com/usuario/academia-baile]

---

**¡Disfruta bailando con Academia Baile!** 💃🕺 