import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
id: any;
postData: any
  constructor( private route: ActivatedRoute,
    private postService:PostServiceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.getOne();
  }
  async getOne() {
    this.postService.getOne(this.id)
      .subscribe(res => {
        console.log(res);
        this.postData = res;
        console.log(this.postData);
      }, err => {
        console.log(err);
      });
  }


}
