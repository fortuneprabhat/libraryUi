import { Component, OnInit, Input  } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../Services/BookService';
import { Book } from '../Model/Book';

import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  id: number;
  book: Book;

  constructor(private route: ActivatedRoute,private router: Router,
    private bookService: BookService) { }

  ngOnInit() {
    this.book = new Book();

    this.id = this.route.snapshot.params['id'];
    
    this.bookService.getBook(this.id)
      .subscribe(data => {
        console.log(data)
        this.book = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['books']);
  }

}
