import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss'],
})
export class ViewBookComponent implements OnInit {
catData: any;
id: any
  constructor( private bookService: BookserviceService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.getAPIDataByID();
  }

  async getAPIDataByID() {
    this.bookService.getAPIDataByID(this.id)
      .subscribe(res => {
        console.log(res);
        this.catData = res;
        console.log(this.catData);
      }, err => {
        console.log(err);
      });
  }
}
