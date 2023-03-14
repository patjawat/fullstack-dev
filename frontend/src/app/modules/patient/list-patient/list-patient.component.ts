import { Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PatientService } from 'src/app/core/services/patient.service';

export interface Patient {
  id: string;
  fname: string;
  lname: string;
  email: string;
}



@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent {


  displayedColumns: string[] = ['id', 'fname', 'lname', 'cid','action'];
  dataSource!: MatTableDataSource<Patient>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private patientService: PatientService,
  ) {

  }


  ngOnInit() {
    this.loadPatient();
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
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },error(err:any) {
      console.log(err);
      },
    });
  }

}
