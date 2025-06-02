from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, SkillViewSet, ContactViewSet, AboutViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'contact', ContactViewSet)
router.register(r'about', AboutViewSet)

urlpatterns = [
    path('', include(router.urls)),
] 