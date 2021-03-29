import { Component, OnInit } from '@angular/core';
import { Gallery } from 'angular-gallery';

@Component({
  selector: 'app-imagegallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  constructor(private gallery: Gallery) { }
imagesArr = [
  {path: 'assets/images/gallery/shota.jpg', index: 0},
    {path: 'assets/images/gallery/ilia.png', index: 1},
    {path: 'assets/images/gallery/akaki.jpg', index: 2},
    {path: 'assets/images/gallery/vaja.png', index: 3},
    {path: 'assets/images/gallery/gala.jpg', index: 3}
]
  ngOnInit(): void {
  }
  showGallery(index: number){
let prop ={
  images: [
    {path: 'assets/images/gallery/shota.jpg'},
    {path: 'assets/images/gallery/ilia.png'},
    {path: 'assets/images/gallery/akaki.jpg'},
    {path: 'assets/images/gallery/vaja.png'},
    {path: 'assets/images/gallery/gala.jpg'}
  ],
  index
};
this.gallery.load(prop);
  }
}
