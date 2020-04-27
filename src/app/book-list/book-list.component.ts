import { Component, OnInit } from '@angular/core';
import { BookService } from '../Services/BookService';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { BookDetailsComponent } from '../book-details/book-details.component'
import { Book } from '../Model/Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Observable<Book[]>;

  constructor(private booksService: BookService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.books = this.booksService.getBooksList();
  }
  deleteBook(id: number) {
    this.booksService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  bookDetails(id: number){
    this.router.navigate(['details', id]);
  }

  // updateBook(book: Book){
  //   this.booksService.updateBook(book).subscribe(
  //     data => {
  //       console.log(data);
  //       this.reloadData();
  //   },
  //   error => console.log(error));
  // }
  updateBook(id: number){
    this.router.navigate(['update', id]);
  }

}
