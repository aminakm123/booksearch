from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import BookSerializer
from .models import Book

@api_view(['GET'])
def bookList(request):
    query = request.query_params.get('query', '')
    if query:
        books = Book.objects.filter(title__icontains=query) | Book.objects.filter(author__icontains=query) | Book.objects.filter(genre__icontains=query) | Book.objects.filter(publication_date__icontains=query) | Book.objects.filter(price__icontains=query)
    else:
        books = Book.objects.all().order_by('-id')
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def bookCreate(request):
	serializer = BookSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)