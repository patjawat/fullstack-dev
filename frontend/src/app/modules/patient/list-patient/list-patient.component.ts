import { Component } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent {

  constructor(
    private patientService:PatientService
  ) {}

  patient:[] = [];

  ngOnInit(): void {
this.loadPatient();
  }

  
  
  loadPatient(){
    this.patientService.getPatients().subscribe({
      next: (patient:any) => {
       this.patient = patient.items;
       console.log(patient.items);
       
      },error(err) {
        console.log(err);
        
      },
    });
  }
}
