import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.page.html',
  styleUrls: ['./allbooks.page.scss'],
})
export class AllbooksPage implements OnInit {
catData: any;
  constructor(public bookService: BookserviceService, public storage: Storage, public router: Router) { }

  ngOnInit() {
    this.getData();
  }
  async postView(id: any) {
    debugger
    await this.storage.create();
    await this.router.navigateByUrl('/:id')
  }

  async getData() {
    await this.bookService.getAPIData()
    .subscribe(res=> {
      console.log(res);
      this.catData = res;
      console.log(this.catData);
    }, err => {
      console.log(err);
    });
  }
}
