import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard  {
  constructor(private service:AuthService,private route:Router){

  }
  canActivate(){
   if(this.service.HaveAccess()){
    return true;
   }else{
     this.route.navigate(['']);
     return false;
   }
  }
}
