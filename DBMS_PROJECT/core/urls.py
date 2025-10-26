from django.urls import path
from . import views, auth

urlpatterns = [
    path('', views.home, name='home'),
    path('login/', auth.login_view, name='login'),
    path('logout/', auth.logout_view, name='logout'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('admin/students/', views.student_list, name='student_list'),
    path('admin/rooms/', views.room_list, name='room_list'),
    path('admin/payments/', views.payment_list, name='payment_list'),
    path('admin/reports/', views.reports, name='reports'),
]