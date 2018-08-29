import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/galleryService';
import { Card } from '../info';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  // price: void;

  info = [];
  price = [];
  constructor(private serviceGallery: GalleryService, private dialog: MatDialog) {
    this.serviceGallery.getInfo().subscribe(data => this.info = data);
    this.info.sort();
   }

  // Modal dialog
    openDialog() {
      const dialogConfig = new MatDialogConfig();
      this.dialog.open(DialogContentComponent, dialogConfig);
      };
  
      
  ngOnInit() {
    this.price = this.serviceGallery.getRandomPrice();
      }


}
