import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-open-post',
  templateUrl: './open-post.page.html',
  styleUrls: ['./open-post.page.scss'],
})
export class OpenPostPage implements OnInit {
id: any;
postView: any;
  constructor( public storage: Storage, 
    public postService: PostServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
  // this.storage.get('id').then((id) => {
  //   console.log("id:" + id);
  //   this.getAPIDataByID(id);
  // });
  // this.id = this.route.snapshot.params['id']
  // this.getOne();
  }

  // getOne()
  // {
  //   this.postService.getOne(this.id).subscribe(data => 
  //     {
  //       console.log(data);
  //     })
  // }
// async getAPIDataByID(id: any) {
//   console.log(id);
//   await this.postService.getAPIDataByID(id)
//   .subscribe(res => {
//     this.postView = res; 
//     console.log(this.postView);
//   }, 
//   err => {
//     console.log(err);
//   }
//   );
// }
}
