/**
 * URL base del API (Django). En desarrollo suele ser http://localhost:8000
 * Definir REACT_APP_API_URL en .env para producción u otro puerto.
 */
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

/**
 * Devuelve la URL absoluta para una thumbnail/media devuelta por el API.
 * El API devuelve rutas relativas (ej. "blog/.../thumb.jpg" o "/media/blog/...");
 * el navegador en localhost:3000 las pide a ese origen y fallan. Aquí se apuntan al backend.
 */
export function getMediaUrl(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const base = API_URL.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return path.startsWith('/media') ? `${base}${normalized}` : `${base}/media/${path.replace(/^\//, '')}`;
}
