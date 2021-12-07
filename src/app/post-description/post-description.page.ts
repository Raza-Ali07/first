import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PostServiceService } from '../post-service.service';
import { Storage } from '@ionic/storage'
@Component({
  selector: 'app-post-description',
  templateUrl: './post-description.page.html',
  styleUrls: ['./post-description.page.scss'],
})
export class PostDescriptionPage implements OnInit {
  public items: any= [];
  postData: any;
  id: any[];
  constructor(public postService: PostServiceService, public storage: Storage, public router: Router) {}

  ngOnInit() {
    this.getData();
  }
  async postView(id: any) {
    debugger
    await this.storage.create();
    await this.router.navigateByUrl('open-post/:id')
  }
  async getData() {
    await this.postService.getAPIData()
    .subscribe(res=> {
      console.log(res);
      this.postData = res;
      console.log(this.postData);
    }, err => {
      console.log(err);
    });
  }
}