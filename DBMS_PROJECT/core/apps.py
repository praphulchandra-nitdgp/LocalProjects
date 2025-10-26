import mysql.connector
from django.apps import AppConfig
from django.conf import settings

class CoreConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'core'

    def ready(self):
        import os
        if os.environ.get('RUN_MAIN', None) != 'true':
            return  # Avoid running twice during runserver

        db = mysql.connector.connect(
            host=settings.DATABASES['default']['HOST'],
            user=settings.DATABASES['default']['USER'],
            password=settings.DATABASES['default']['PASSWORD'],
            database=settings.DATABASES['default']['NAME']
        )

        cursor = db.cursor()
        with open('core/sql/schema.sql', 'r') as f:
            cursor.execute(f.read(), multi=True)
        db.commit()
        cursor.close()
        db.close()
