import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { VideoBackgroundComponent } from './video-background/video-background.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {path: 'contacts', component: ContactComponent},
  {path: 'video', component: VideoBackgroundComponent},
  {path: 'gallery', component: ImageGalleryComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
