import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  durationInSeconds = 5;
  private loading: boolean = false;

  constructor(
    private _snackBar: MatSnackBar,
    private toastr: ToastrService
    ) {}

    setLoading(loading: boolean) {
      this.loading = loading;
    }
  
    getLoading(): boolean {
      return this.loading;
    }

  openSnackBar(msg:string,action:string) {
    this._snackBar.open(msg, action,{
      duration: this.durationInSeconds * 500,
      verticalPosition:'top'
    });
  }


  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }


  alertSuccess() {
    Swal.fire('ดำเนินการ', 'บันทึกรายการสำเร็จ!', 'success');
  }

  alertConfirm() {
    Swal.fire({
      title: 'คุณแน่ใจไหม?',
      text: 'กระบวนการนี้ไม่สามารถย้อนกลับได้.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ใช่, ฉันต้องการลบ.',
      cancelButtonText: 'ไม่, ขอคิดดูก่อน',
    }).then((result) => {
      // console.log(result.value);
      
      if (result.value) {
        Swal.fire('Removed!', 'Product removed successfully.', 'success');
        return result.value;
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });

}

}
