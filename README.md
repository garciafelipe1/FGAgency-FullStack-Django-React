# FG SOFTWARE AGENCY

![FG Software Agency](https://github.com/user-attachments/assets/d0e9bcc4-0636-41bd-bd5e-770dfc4f9807)

---

## Sobre el proyecto

**FG Software Agency** es una **web corporativa full-stack** que presenta una agencia de software y marketing digital. El sitio ofrece información sobre servicios, casos de éxito, equipo, blog y canales de contacto, pensado tanto para mostrar la marca como para captar leads (formulario de contacto, opt-in para recursos descargables).

El proyecto está construido con **Django** en el backend (API REST) y **React** en el frontend, dentro del mismo repositorio. El front se consume desde el navegador y se comunica con el API por HTTP; en producción, el build de React puede servirse desde el mismo dominio que Django (por ejemplo con WhiteNoise y rutas catch-all) o desde un despliegue separado.

---

## Qué incluye la aplicación

### Páginas y rutas (frontend)

- **Inicio** — Hero, incentivos/beneficios, casos de uso, características, logos de clientes/partners y listado reciente del blog.
- **Nosotros** — Presentación de la agencia y el equipo.
- **Servicios** — Descripción de servicios (con subruta ej. desarrollo con JavaScript).
- **Casos** — Casos de éxito o proyectos (con subruta ej. ecommerce).
- **Carreras** — Ofertas de trabajo o cultura de la empresa.
- **Blog** — Listado de entradas con filtro por categoría, búsqueda y paginación; cada post tiene detalle con contenido enriquecido (HTML) y miniatura.
- **Contacto** — Formulario que envía los datos al backend.
- **Ebook / Opt-in** — Páginas de captación (ej. descarga de recurso o registro a formación), con envío al API.

La app usa **React Router** (v6), **Redux** (thunk) para estado global (blog, categorías, etc.), **Framer Motion** para transiciones entre rutas y **Tailwind CSS** para estilos. Incluye **SEO** básico con `react-helmet-async` (títulos, meta, Open Graph, Twitter) y diseño **responsive**.

### Backend (Django)

- **API REST** (Django REST Framework):
  - **Blog**: listado, detalle por slug, búsqueda, filtro por categoría; soporte para borradores/publicación, creación/edición/eliminación (endpoints pensados para un futuro panel de administración o CMS).
  - **Categorías**: listado de categorías del blog (con posibilidad de jerarquía vía `parent`).
  - **Contacto**: recepción de mensajes del formulario y endpoint de **opt-in** (suscripción/registro para recursos).
- **Autenticación**: **Djoser** + **JWT** (Simple JWT) y opción de login social (`social-auth-app-django`), preparado para que un futuro dashboard o panel use el mismo backend.
- **Contenido enriquecido**: modelos de blog con **CKEditor** (RichTextField) para el cuerpo del post; subida de **imágenes** (miniaturas en `media/blog/...`).
- **Configuración**: variables de entorno con `django-environ` (`.env` en `core/`), CORS, WhiteNoise para estáticos, y servicio de media en desarrollo; preparado para usar **django-storages** (p. ej. S3) en producción.

El frontend se conecta al API mediante una **URL base configurable** (`config.js` + `REACT_APP_API_URL`), y las rutas de media (thumbnails del blog) se resuelven contra esa URL para que las imágenes se carguen desde el backend aunque el front se sirva en otro puerto o dominio.

---

## Stack técnico

| Capa        | Tecnologías |
|------------|-------------|
| **Frontend** | React 18, React Router 6, Redux, Redux Thunk, Tailwind CSS, Framer Motion, Axios, Moment.js, DOMPurify, React Helmet Async |
| **Backend**  | Django 5, Django REST Framework, Djoser, Simple JWT, django-cors-headers, django-environ, CKEditor, Pillow, WhiteNoise, Gunicorn (producción) |
| **Base de datos** | SQLite en desarrollo (configurable vía `DATABASE_URL`); adaptable a PostgreSQL u otros |
| **Herramientas** | Create React App, Node (scripts para arrancar backend), venv (Python) |

---

## Estructura del proyecto (parte principal)

La aplicación full-stack que se ejecuta y despliega está en **`Despliegue/agencia/`**:

- **`core/`** — Configuración Django (settings, urls, wsgi), `.env` de ejemplo/desarrollo.
- **`apps/`** — Aplicaciones Django: `blog` (modelos Post, ViewCount, serializers, vistas API), `category`, `user`, `contacts` (formulario + opt-in).
- **`src/`** — Código React: componentes (home, blog, navegación, formularios), contenedores por página, Redux (actions/reducers), rutas, configuración (`config.js` con `API_URL` y helper para URLs de media).
- **`scripts/run-back.js`** — Script Node que arranca el servidor Django con el Python del `venv` (útil en Windows y Linux).
- **`build/`** — Salida del `npm run build` de React; Django puede servir esta carpeta en producción para la SPA.

En la raíz del repo hay otros proyectos o variantes (dashboard, email, etc.); la **web pública de la agencia** es la que vive en `Despliegue/agencia/`.

---

## Cómo ejecutarlo (desarrollo)

1. **Requisitos**: Node.js, npm, Python 3, y (recomendado) un entorno virtual de Python.
2. **Ruta de trabajo**: `Despliegue/agencia/`.
3. **Backend**:
   - Crear venv, activarlo e instalar dependencias: `pip install -r requirements.txt`.
   - Copiar/crear `core/.env` con al menos `SECRET_KEY`, `DEBUG`, `ALLOWED_HOSTS_DEV`, `DATABASE_URL` (para SQLite puede ser `sqlite:///db.sqlite3`).
   - Aplicar migraciones: `python manage.py migrate`.
   - Opcional: crear superusuario, datos de ejemplo o miniaturas del blog con los management commands del proyecto.
   - Arrancar API: `npm run back` (usa `scripts/run-back.js`) o `python manage.py runserver` (puerto 8000).
4. **Frontend**:
   - Instalar dependencias: `npm install`.
   - Arrancar: `npm start` (puerto 3000).
   - Asegurarse de que `config.js` (o `REACT_APP_API_URL`) apunte a `http://localhost:8000` en desarrollo.
5. Para levantar backend y front a la vez: `npm run dev` (si está configurado `concurrently` en `package.json`).

---

## Resumen para reclutadores

- **Tipo**: Web corporativa / landing + blog + formularios (full-stack).
- **Rol**: Desarrollo full-stack (Django + React), API REST, integración front-back, SEO y UX (responsive, animaciones, formularios).
- **Destacable**: Arquitectura API + SPA en un solo repo, autenticación JWT y social preparada, blog con categorías y contenido enriquecido, gestión de media y configuración por entorno, scripts de desarrollo multiplataforma.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory (`Despliegue/agencia/`), you can run:

### `npm start` / `npm run front`

Runs the React app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### `npm run back`

Starts the Django development server (API and admin) using the project’s virtualenv.  
API base URL: [http://localhost:8000](http://localhost:8000). Keep this running while using the frontend in development.

### `npm run dev`

Runs both the backend and the frontend concurrently (if configured).

### `npm run build`

Builds the React app for production into the `build` folder. It correctly bundles React in production mode and optimizes the build for deployment.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
