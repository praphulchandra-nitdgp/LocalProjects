from django.db import connection

def insert_student(name, email, room_id, check_in, check_out):
    with connection.cursor() as cursor:
        cursor.execute(
            "INSERT INTO students (name, email, room_id, check_in, check_out) VALUES (%s, %s, %s, %s, %s)",
            [name, email, room_id, check_in, check_out]
        )

def get_students():
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM students")
        result = cursor.fetchall()
        return result
