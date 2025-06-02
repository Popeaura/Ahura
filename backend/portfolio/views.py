from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Project, Skill, Contact, About
from .serializers import ProjectSerializer, SkillSerializer, ContactSerializer, AboutSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    
    @action(detail=False, methods=['get'])
    def by_category(self, request):
        skills = {}
        for category in dict(Skill.CATEGORY_CHOICES).keys():
            skills[category] = SkillSerializer(
                Skill.objects.filter(category=category),
                many=True
            ).data
        return Response(skills)

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    http_method_names = ['post']  # Only allow POST requests

class AboutViewSet(viewsets.ModelViewSet):
    queryset = About.objects.all()
    serializer_class = AboutSerializer
    
    @action(detail=False, methods=['get'])
    def current(self, request):
        about = About.objects.first()
        serializer = AboutSerializer(about)
        return Response(serializer.data) 