import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'post-description',
    loadChildren: () => import('./post-description/post-description.module').then( m => m.PostDescriptionPageModule)
  },
  {
    path: 'open-post/:id',
    loadChildren: () => import('./open-post/open-post.module').then( m => m.OpenPostPageModule)
  },
  {
    path: 'allbooks',
    loadChildren: () => import('./allbooks/allbooks.module').then( m => m.AllbooksPageModule)
  },
  {path: 'viewposts/:id', component:PostsComponent},
  {path: 'viewbook/:id', component:ViewBookComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
