import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/galleryService';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  edit = [];
  info = [];
  price = [];
  constructor(private serviceGallery: GalleryService, private dialog: MatDialog) {
    this.serviceGallery.getInfo().subscribe(data => this.info = data);
    // this.info.sort();
   }

  // Modal dialog
    openDialog(i) {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.data = {
        name: '',
        full_name: ''
    };
      const dialogRef = this.dialog.open(DialogContentComponent, dialogConfig);  


      dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    ); 
    }


  //Delete card
      deleteCard(i){ 
        this.info.splice(i, 1);
      }

  //Price
  ngOnInit() {
    this.price =  this.serviceGallery.getRandomPrice()
      }
      
      


}
