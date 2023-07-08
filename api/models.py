from django.db import models
from django.utils.translation import gettext_lazy as _

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    description = models.TextField()
    cover_image = models.ImageField(upload_to='book_covers/')
    price = models.DecimalField(max_digits=5, decimal_places=2)
    rating = models.DecimalField(max_digits=5, decimal_places=2)
    genre = models.CharField(max_length=50)
    publication_date = models.DateField()

    class Meta:
        db_table = 'book'
        verbose_name = _('book')
        verbose_name_plural = _('books')

    def __str__(self):
        return self.title