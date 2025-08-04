# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a **Academia Baile**! Este documento te ayudará a entender cómo puedes participar en el desarrollo del proyecto.

## 📋 Tabla de Contenidos

- [🚀 Empezando](#empezando)
- [🔄 Flujo de Trabajo](#flujo-de-trabajo)
- [📝 Convenciones de Código](#convenciones-de-código)
- [🧪 Testing](#testing)
- [📱 Responsive Design](#responsive-design)
- [🔧 Herramientas de Desarrollo](#herramientas-de-desarrollo)
- [📚 Documentación](#documentación)
- [🎯 Reportando Issues](#reportando-issues)
- [✅ Pull Requests](#pull-requests)

## 🚀 Empezando

### Prerrequisitos

- **Node.js** (versión 16 o superior)
- **npm** o **yarn**
- **Git**

### Instalación

1. **Fork el repositorio**
```bash
# En tu cuenta de GitHub, haz fork del repositorio
# Luego clona tu fork
git clone https://github.com/TU-USUARIO/academia-baile.git
cd academia-baile
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Configura las herramientas de desarrollo**
```bash
npm run prepare
```

4. **Ejecuta el proyecto en desarrollo**
```bash
npm run dev
```

## 🔄 Flujo de Trabajo

### Estructura de Ramas

- **`main`** - Código de producción (solo merge desde `stg`)
- **`stg`** - Staging/testing (merge desde `dev`)
- **`dev`** - Desarrollo activo (rama principal de desarrollo)

### Workflow Recomendado

1. **Crea una rama desde `dev`**
```bash
git checkout dev
git pull origin dev
git checkout -b feature/tu-nueva-funcionalidad
```

2. **Desarrolla tu funcionalidad**
```bash
# Haz tus cambios
npm run dev  # Para desarrollo
npm run lint # Para verificar código
npm run format # Para formatear código
```

3. **Commit tus cambios**
```bash
git add .
git commit -m "feat: agregar nueva funcionalidad"
```

4. **Push y crea Pull Request**
```bash
git push origin feature/tu-nueva-funcionalidad
# Ve a GitHub y crea un Pull Request hacia `dev`
```

5. **Después de aprobación, merge a `stg`**
```bash
# El maintainer hará merge a stg para testing
```

6. **Finalmente, merge a `main`**
```bash
# Después de testing exitoso, merge a main
```

## 📝 Convenciones de Código

### Estilo de Código

- **ESLint** y **Prettier** están configurados
- Ejecuta `npm run lint` antes de commit
- Ejecuta `npm run format` para formatear código

### Convenciones de Commits

Usa [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Tipos de commits
feat:     nueva funcionalidad
fix:      corrección de bug
docs:     cambios en documentación
style:    cambios de formato (no afectan funcionalidad)
refactor: refactorización de código
test:     agregar o corregir tests
chore:    cambios en build process o herramientas

# Ejemplos
git commit -m "feat: agregar sistema de niveles por baile"
git commit -m "fix: corregir responsive en dashboard móvil"
git commit -m "docs: actualizar README con nuevas funcionalidades"
```

### Estructura de Archivos

```
src/
├── components/     # Componentes reutilizables
├── context/       # Contextos de React
├── mockData/      # Datos simulados
├── pages/         # Páginas de la aplicación
├── utils/         # Utilidades y helpers
└── theme.js       # Configuración de tema
```

### Nomenclatura

- **Componentes:** PascalCase (`UserDashboard.jsx`)
- **Archivos:** camelCase (`authContext.jsx`)
- **Carpetas:** camelCase (`mockData/`)
- **Variables:** camelCase (`userName`)
- **Constantes:** UPPER_SNAKE_CASE (`API_BASE_URL`)

## 🧪 Testing

### Pruebas Manuales

Antes de enviar un PR, verifica:

- [ ] ✅ Funciona en Chrome
- [ ] ✅ Funciona en Firefox
- [ ] ✅ Funciona en Safari
- [ ] ✅ Funciona en móviles
- [ ] ✅ Funciona en tablets
- [ ] ✅ No hay errores en consola
- [ ] ✅ Performance aceptable

### Pruebas Automatizadas

```bash
npm run lint    # Linting
npm run format  # Formateo
npm run build   # Build de producción
```

## 📱 Responsive Design

### Breakpoints

- **xs:** 0px - 600px (móviles)
- **sm:** 600px - 960px (tablets pequeñas)
- **md:** 960px - 1280px (tablets grandes)
- **lg:** 1280px - 1920px (desktop)
- **xl:** 1920px+ (pantallas grandes)

### Verificación

```bash
# Usa las herramientas de desarrollo del navegador
# Verifica en diferentes tamaños de pantalla
```

## 🔧 Herramientas de Desarrollo

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Vista previa de producción
npm run lint         # Linting
npm run format       # Formateo
npm run format:check # Verificar formato
```

### Git Hooks

- **pre-commit:** Ejecuta lint-staged automáticamente
- **commit-msg:** Verifica formato de commits

## 📚 Documentación

### Comentarios en Código

```javascript
/**
 * Calcula el nivel de un usuario en un baile específico
 * @param {string} baile - Tipo de baile
 * @param {object} user - Usuario
 * @returns {string} Nivel del usuario
 */
const getUserNivel = (baile, user) => {
  return user.niveles?.[baile] || "basico";
};
```

### Documentación de Componentes

```javascript
/**
 * Componente de navegación principal
 * 
 * @component
 * @example
 * <Navbar />
 */
const Navbar = () => {
  // Componente
};
```

## 🎯 Reportando Issues

### Antes de Reportar

1. **Busca en issues existentes** - Tu problema puede ya estar reportado
2. **Verifica la documentación** - La respuesta puede estar en el README
3. **Prueba en diferentes navegadores** - Puede ser un problema específico

### Reportando un Bug

Usa la plantilla de bug report y incluye:

- **Descripción clara** del problema
- **Pasos para reproducir**
- **Comportamiento esperado**
- **Información del sistema**
- **Capturas de pantalla** si es aplicable

### Sugiriendo una Funcionalidad

Usa la plantilla de feature request y incluye:

- **Descripción de la funcionalidad**
- **Problema que resuelve**
- **Solución propuesta**
- **Alternativas consideradas**

## ✅ Pull Requests

### Antes de Enviar

- [ ] ✅ Código sigue las convenciones
- [ ] ✅ Tests pasan
- [ ] ✅ Documentación actualizada
- [ ] ✅ Responsive design verificado
- [ ] ✅ No hay errores de linting

### Proceso de Review

1. **Crea el PR** hacia la rama correcta
2. **Usa la plantilla** de PR
3. **Describe los cambios** claramente
4. **Incluye capturas** si es necesario
5. **Responde a feedback** del maintainer

### Criterios de Aceptación

- ✅ Funcionalidad funciona correctamente
- ✅ Código es legible y mantenible
- ✅ Tests pasan
- ✅ No rompe funcionalidad existente
- ✅ Documentación actualizada
- ✅ Responsive design verificado

## 🎉 Reconocimientos

- **Contribuidores** serán listados en el README
- **Issues significativos** serán mencionados en releases
- **Pull requests destacados** serán destacados

## 📞 Contacto

- **Discusiones:** Usa GitHub Discussions
- **Issues:** Usa GitHub Issues
- **Email:** [tu-email@ejemplo.com]

---

**¡Gracias por contribuir a Academia Baile!** 💃🕺 