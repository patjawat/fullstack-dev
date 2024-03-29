import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { FormPostComponent } from './form-post/form-post.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(
    private _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  add(){
    const dialogRef = this._dialog.open(FormPostComponent)
  }

}
