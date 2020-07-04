import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/components/login/login.component';
import {RegisterComponent} from './auth/components/register/register.component';
import {HomeComponent} from './home/home.component';
import {PhotoGalleryComponent} from './photo-gallery/photo-gallery.component';



const routes: Routes = [
   {path: 'home', component: HomeComponent},
  {path: 'gallery', component: PhotoGalleryComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
