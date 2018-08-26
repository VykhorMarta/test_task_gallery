import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/galleryService';
import { Card } from '../info';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  card: Card;

  info = {};
  constructor(private serviceGallery: GalleryService) {
    this.serviceGallery.getInfo().add(data => this.info = data);

   }

  ngOnInit() {
  }


}
