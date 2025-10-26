from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from .db import get_students, get_rooms, get_payments, get_student_profile, get_student_payments
from django.shortcuts import redirect

def home(request):
    return redirect('login')

@login_required
def dashboard(request):
    if request.user.is_superuser:
        return render(request, 'admin_dashboard.html')
    student = get_student_profile(request.user.username)
    payments = get_student_payments(request.user.username)
    return render(request, 'student_dashboard.html', {'student': student, 'payments': payments})
