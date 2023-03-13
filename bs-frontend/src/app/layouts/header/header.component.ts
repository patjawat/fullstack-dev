import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/service/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private service: AuthService
    ) { }
  isLogin = this.service.IsLoggedIn();

  ngOnInit(): void {
  }

}
