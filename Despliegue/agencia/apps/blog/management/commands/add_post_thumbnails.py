"""
Asigna una imagen de portada a cada post que no tenga thumbnail.
Usa imágenes de Picsum (placeholder) por slug para que cada post tenga una distinta.
"""
import requests
from django.core.files.base import ContentFile
from django.core.management.base import BaseCommand
from apps.blog.models import Post

# Una imagen distinta por post (Picsum: id=fijo para imagen estable, tamaño 800x450)
IMAGES_BY_SLUG = {
    "bienvenido-blog-fg-agency": "https://picsum.photos/id/1/800/450",
    "por-que-necesitas-web-profesional": "https://picsum.photos/id/20/800/450",
    "desarrollo-web-react-django": "https://picsum.photos/id/29/800/450",
    "como-elegir-agencia-desarrollo": "https://picsum.photos/id/48/800/450",
    "tendencias-diseno-web-2025": "https://picsum.photos/id/57/800/450",
}


class Command(BaseCommand):
    help = "Añade imagen de portada a los posts de ejemplo (por slug)."

    def add_arguments(self, parser):
        parser.add_argument(
            "--force",
            action="store_true",
            help="Reemplazar la imagen aunque el post ya tenga thumbnail.",
        )

    def handle(self, *args, **options):
        force = options["force"]
        updated = 0
        for slug, url in IMAGES_BY_SLUG.items():
            post = Post.objects.filter(slug=slug).first()
            if not post:
                self.stdout.write(self.style.WARNING(f"  No existe post con slug: {slug}"))
                continue
            if post.thumbnail and not force:
                self.stdout.write(f"  Ya tiene imagen: {post.title}")
                continue
            try:
                resp = requests.get(url, timeout=10)
                resp.raise_for_status()
                # Picsum puede redirigir a la URL final de la imagen
                if resp.url != url:
                    resp = requests.get(resp.url, timeout=10)
                    resp.raise_for_status()
                name = f"thumb_{slug}.jpg"
                post.thumbnail.save(name, ContentFile(resp.content), save=True)
                updated += 1
                self.stdout.write(self.style.SUCCESS(f"  Imagen asignada: {post.title}"))
            except Exception as e:
                self.stdout.write(self.style.ERROR(f"  Error en {post.title}: {e}"))
        self.stdout.write(self.style.SUCCESS(f"\nListo. Imágenes asignadas: {updated}"))
