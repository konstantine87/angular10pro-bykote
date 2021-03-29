import { ContactService } from './contact.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoBackgroundComponent } from './video-background/video-background.component';
import { MyPipePipe } from './my-pipe.pipe';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { IvyGalleryModule } from 'angular-gallery';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { SearchfilterPipe } from './searchfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    VideoBackgroundComponent,
    MyPipePipe,
    PipeExampleComponent,
    ImageGalleryComponent,
    DirectiveExampleComponent,
    StudentdetailsComponent,
    SearchfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IvyGalleryModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
