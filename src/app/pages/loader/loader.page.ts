import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/post-service.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {
postData: any;
  constructor(private postService: PostServiceService ){ }

  ngOnInit() {
    this.getData();
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
