import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PatientService } from 'src/app/core/services/patient.service';
import { FormPatientComponent } from '../form-patient/form-patient.component';

export interface Patient {
  hn: string;
  fname: string;
  lname: string;
  cid: string;
}


const COLUMNS_SCHEMA = [
  {
      key: "hn",
      type: "text",
      label: "HN"
  },
  {
      key: "fname",
      type: "text",
      label: "ชื่อ"
  },
  {
      key: "lname",
      type: "date",
      label: "นามสกุล"
  },
  {
      key: "cid",
      type: "text",
      label: "บัตรประชาชน"
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: ""
  }
]


@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent {


  // displayedColumns: string[] = ['hn', 'fname', 'lname', 'cid'];
  // dataSource!: MatTableDataSource<Patient>;

  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  // displayedColumns: string[] = ['hn', 'fname', 'lname', 'cid'];
  dataSource: any;
  columnsSchema: any = COLUMNS_SCHEMA;
  patient:any;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private _dialog : MatDialog,
    private patientService: PatientService,
  ) {

  }


  ngOnInit() {
    this.loadPatient();
  }

  openDialog() {
    this._dialog.open(FormPatientComponent);
  }


  editPatient(data:any){
    const dialogRef = this._dialog.open(FormPatientComponent,{
      data:data
    })
    dialogRef.afterClosed().subscribe({
      next:(val:any) => {
        if(val){
          // this._coreService.openSnackBar('ok','Edit success');
          this.loadPatient();
        }
      },
    })
   
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  loadPatient(){
    this.patientService.getAllPatient().subscribe({
      next: (res:any) =>{
        console.log(res);
        this.patient = res;
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },error(err:any) {
      console.log(err);
      },
    });
  }

  

}
