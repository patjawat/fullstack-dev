import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core/core.service';
import Swal from 'sweetalert2';
import { PatientService } from '../patient.service';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent {

  patient:any

  constructor(
    private patientService:PatientService,
    private coreService:CoreService
  ) {}
  ngOnInit(): void {
    this.loadPatientList();
  }


  loadPatientList(){
    this.patientService.getAll().subscribe({
      next: (patient:any) => {
       this.patient = patient.items;
       console.log(patient.items);
       
      },error(err) {
        console.log(err);
        
      },
    });
  }

  async deletePatient(id:any){


    const res = await this.patientService.remove(id).subscribe((res) =>{
      console.log(res);
      
    });
    console.log(res);
    
  //     await Swal.fire({
  //       title: 'คุณแน่ใจไหม?',
  //       text: 'กระบวนการนี้ไม่สามารถย้อนกลับได้.',
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonText: 'ใช่, ฉันต้องการลบ.',
  //       cancelButtonText: 'ไม่, ขอคิดดูก่อน',
  //     }).then((result) => {
  //       // console.log(result.value);
        
  //       if (result.value) {
  //         Swal.fire('Removed!', 'Product removed successfully.', 'success');
  //         this.patientService.remove(id);
  //       } 
  //       // else if (result.dismiss === Swal.DismissReason.cancel) {
  //       //   Swal.fire('Cancelled', 'Product still in our database.)', 'error');
  //       // }

  // });
  
  
   
  }
}
