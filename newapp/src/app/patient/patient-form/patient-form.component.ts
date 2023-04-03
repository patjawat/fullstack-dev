import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { PatientService } from '../patient.service';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent {
  form: FormGroup;
  files: string[] = [];
  uploads:any = {};
  id:string = '';
  isAddMode: boolean = false;
  loading =false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _fb: FormBuilder,
    private patientService: PatientService,
    private coreService:CoreService

  ) { 
    this.form = _fb.group({
      fname: '',
      lname: '',
      cid: '',
      phone:'',
      address:'',
      birthday:''
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    if (this.id) {
      this.loading = true;
      this.patientService.getById(this.id)
      .pipe(first())
      .subscribe((res)=>{
        this.form.patchValue(res)
        this.uploads = res.uploads;
        // this.loading = false;
      });
      // .subscribe(x => this.form.patchValue(x));
  }
    
  }



  onFileChange(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.files.push(event.target.files[i]);
    }
  }
  
  private create() {

    const formData = new FormData();
    formData.append('file', this.form.get('file')?.value);
    formData.append('fname', this.form.get('fname')?.value);
    formData.append('lname', this.form.get('lname')?.value);
    formData.append('cid', this.form.get('cid')?.value);
    for (var i = 0; i < this.files.length; i++) {
      formData.append("files", this.files[i]);
    }
      this.patientService.create(formData).subscribe({
        next: (res) => {

          this.coreService.alertSuccess();
          this.router.navigate(['/patient'])
        console.log(res);
        
        },
        error: (e) => {
          console.log(e);
        
        },
        complete: () => console.log('done'),
      });

  }

  private update() {
      const formData = new FormData();
    formData.append('file', this.form.get('file')?.value);
    formData.append('fname', this.form.get('fname')?.value);
    formData.append('lname', this.form.get('lname')?.value);
    formData.append('cid', this.form.get('cid')?.value);
    formData.append('address', this.form.get('address')?.value);
    for (var i = 0; i < this.files.length; i++) {
      formData.append("files", this.files[i]);
    }
    this.patientService.update(this.id, this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    // this.alertService.success('User updated', { keepAfterRouteChange: true });
                    // this.router.navigate(['../../'], { relativeTo: this.route });
                },
                error: error => {
                    // this.alertService.error(error);
                    this.loading = false;
                }
            });

  }

  onFormSubmit() {

    this.loading = true;
    if (this.id) {
      this.update();
    } else {
      this.create();
    }
  
  }


}


