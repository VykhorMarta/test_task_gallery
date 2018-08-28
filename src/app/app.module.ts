import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatDialogModule, MatInputModule, MatButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';

import { GalleryService } from './services/galleryService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogContentComponent } from './dialog-content/dialog-content.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    DialogContentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent],
  entryComponents: [DialogContentComponent]
})
export class AppModule { }
