from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from apps.blog.models import Post
from apps.category.models import Category

User = get_user_model()

SAMPLE_POSTS = [
    {
        "title": "Bienvenido al blog de FG Agency",
        "slug": "bienvenido-blog-fg-agency",
        "description": "Conocé nuestro espacio de noticias sobre desarrollo web, diseño y marketing digital.",
        "content": "<p>En este blog compartimos <strong>consejos</strong>, novedades y casos de éxito de nuestros proyectos. Desarrollo web, aplicaciones a medida y estrategias digitales para que tu negocio crezca.</p><p>¡Gracias por leernos!</p>",
        "time_read": 2,
        "category_slug": "noticias",
    },
    {
        "title": "Por qué tu negocio necesita una web profesional",
        "slug": "por-que-necesitas-web-profesional",
        "description": "Una página web bien hecha genera confianza y más clientes. Te contamos por qué invertir en tu presencia digital.",
        "content": "<p>Hoy tener <em>presencia en internet</em> no es opcional. Una web profesional te permite:</p><ul><li>Llegar a más personas</li><li>Generar confianza</li><li>Vender o captar leads 24/7</li></ul><p>En FG Agency te ayudamos a dar ese paso.</p>",
        "time_read": 4,
        "category_slug": "marketing",
    },
    {
        "title": "Desarrollo web con React y Django",
        "slug": "desarrollo-web-react-django",
        "description": "Combinamos React en el frontend y Django en el backend para aplicaciones rápidas y escalables.",
        "content": "<p><strong>React</strong> y <strong>Django</strong> son dos tecnologías muy usadas en la industria. Juntas permiten construir sitios modernos, rápidos y fáciles de mantener.</p><p>En nuestros proyectos usamos esta stack para ofrecer la mejor experiencia a tus usuarios.</p>",
        "time_read": 5,
        "category_slug": "desarrollo",
    },
    {
        "title": "Cómo elegir la agencia de desarrollo adecuada",
        "slug": "como-elegir-agencia-desarrollo",
        "description": "Consejos prácticos para elegir un equipo de desarrollo que entienda tu proyecto y tu presupuesto.",
        "content": "<p>Elegir una agencia de desarrollo puede ser abrumador. Te recomendamos fijarte en:</p><ol><li>Portfolio y casos de éxito</li><li>Comunicación clara</li><li>Presupuesto y plazos realistas</li></ol><p>En FG Agency priorizamos la transparencia y el trabajo bien hecho.</p>",
        "time_read": 3,
        "category_slug": "noticias",
    },
    {
        "title": "Tendencias en diseño web 2025",
        "slug": "tendencias-diseno-web-2025",
        "description": "Repasamos las tendencias que marcan el diseño web este año: minimalismo, accesibilidad y velocidad.",
        "content": "<p>El diseño web evoluciona cada año. En 2025 destacan el <strong>minimalismo</strong>, la <strong>accesibilidad</strong> y la búsqueda de sitios cada vez más rápidos.</p><p>Adaptamos estas tendencias a la identidad de cada cliente.</p>",
        "time_read": 4,
        "category_slug": "diseno",
    },
]

CATEGORIES = [
    {"name": "Noticias", "slug": "noticias"},
    {"name": "Desarrollo", "slug": "desarrollo"},
    {"name": "Diseño", "slug": "diseno"},
    {"name": "Marketing", "slug": "marketing"},
]


class Command(BaseCommand):
    help = "Crea categorías de ejemplo y posts publicados para el blog."

    def handle(self, *args, **options):
        # Usuario autor (crear si no existe)
        user, created = User.objects.get_or_create(
            email="admin@fgagency.com",
            defaults={
                "first_name": "Admin",
                "last_name": "FG Agency",
                "is_staff": True,
                "is_superuser": True,
            },
        )
        if created:
            user.set_password("admin123")
            user.save()
            self.stdout.write(self.style.SUCCESS(f"Usuario creado: {user.email} (contraseña: admin123)"))

        # Categorías
        categories_by_slug = {}
        for cat_data in CATEGORIES:
            cat, _ = Category.objects.get_or_create(
                slug=cat_data["slug"],
                defaults={"name": cat_data["name"]},
            )
            categories_by_slug[cat.slug] = cat
        self.stdout.write(self.style.SUCCESS(f"Categorías listas: {list(categories_by_slug.keys())}"))

        # Posts
        created_count = 0
        for data in SAMPLE_POSTS:
            slug = data["slug"]
            if Post.objects.filter(slug=slug).exists():
                self.stdout.write(f"  Post ya existe: {data['title']}")
                continue
            category = categories_by_slug.get(data["category_slug"])
            Post.objects.create(
                title=data["title"],
                slug=slug,
                description=data["description"],
                content=data["content"],
                time_read=data.get("time_read", 3),
                author=user,
                category=category,
                status="publish",
            )
            created_count += 1
            self.stdout.write(self.style.SUCCESS(f"  Creado: {data['title']}"))

        self.stdout.write(self.style.SUCCESS(f"\nListo. Posts creados: {created_count}. Total publicados: {Post.postobjects.count()}"))
