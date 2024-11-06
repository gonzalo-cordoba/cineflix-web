# CineFlix Web - Proyecto

**CineFlix** es un sitio web interactivo para la gestión de entradas y la visualización de películas en línea. Los usuarios pueden navegar por el catálogo de películas, elegir sus asientos, comprar boletos y autenticarse con su cuenta de Google para tener acceso a sus reservas y otras funcionalidades personalizadas.

## Tecnologías utilizadas

Este proyecto está construido con las siguientes tecnologías:

- **Next.js** (Versión 13.5.7): Framework para React que permite el desarrollo de aplicaciones web escalables y optimizadas para SEO.
- **React.js** (Versión 18): Biblioteca de JavaScript para la construcción de interfaces de usuario.
- **Tailwind CSS** (Versión 3): Framework de CSS para diseñar interfaces de usuario responsivas y personalizables.
- **TypeScript** (Versión 5): Superset de JavaScript que agrega tipado estático para mejorar el desarrollo y la mantenibilidad del código.
- **Google Authentication**: Sistema de autenticación de usuarios usando la cuenta de Google.
- **Lucide React** y **Radix UI**: Bibliotecas de íconos y componentes UI para mejorar la experiencia del usuario.

## Características

- **Visualización de películas**: Los usuarios pueden explorar una lista de películas disponibles con información detallada sobre cada una.
- **Selección de asientos**: Los usuarios pueden elegir sus asientos para las funciones de cine.
- **Compra de boletos**: Los usuarios pueden adquirir boletos para las funciones de cine disponibles.
- **Autenticación con Google**: Los usuarios pueden registrarse e iniciar sesión mediante su cuenta de Google para gestionar sus reservas y boletos.
- **Información detallada de las películas**: Los usuarios pueden ver detalles de las películas, como sinopsis, duración, género, etc.

## Requisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (Versión 16 o superior)
- **npm** o **yarn**

## Instalación

1. Clona este repositorio a tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/cineflix-web-v1.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd cineflix-web-v1
   ```

3. Instala las dependencias utilizando npm o yarn:

   Con **npm**:

   ```bash
   npm install
   ```

   O con **yarn**:

   ```bash
   yarn install
   ```

   ## Scripts

- **Desarrollo**: Ejecuta el servidor de desarrollo:

  ```bash
  npm run dev
  ```

  Esto abrirá el proyecto en `http://localhost:3000`.

- **Construir**: Construye el proyecto para producción:

  ```bash
  npm run build
  ```

- **Iniciar**: Inicia el servidor de producción:

  ```bash
  npm run start
  ```

- **Linter**: Ejecuta el linter para verificar la calidad del código:

  ```bash
  npm run lint
  ```

  ## Contribuciones

  Si deseas contribuir al proyecto, por favor sigue estos pasos:

  1. Haz un fork del repositorio.
  2. Crea una rama nueva (`git checkout -b feature/nueva-funcionalidad`).
  3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
  4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
  5. Abre un pull request.

  ## Licencia

  Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.
