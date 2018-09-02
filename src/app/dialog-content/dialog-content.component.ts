import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {
  
  form: FormGroup;
  name: string;
  full_name:string;

  constructor(
    private fb: FormBuilder,
     public dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) data){

      this.name = data.name;
      this.full_name = data.full_name;

    }
  

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.name,[]],
      full_name: [this.full_name, []]
  });
  }

   // submit(form) {
  //   this.dialogRef.close(`${form.value.name, form.value.full_name}`);
  // }

saveEdit(){
  this.dialogRef.close(this.form.value);
}



deleteCard(){
  this.dialogRef.close();

}

}
