
from django.contrib import admin
from django.urls import path, include
from patients import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('patients.urls')),  # your backend APIs
    path('', views.frontend),                # root URL serves React frontend
]
