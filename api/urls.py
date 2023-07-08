from django.urls import path
from . import views

urlpatterns = [
	
	path('books/', views.bookList, name="task-list"),	
	path('create-book/', views.bookCreate, name="task-create"),

]