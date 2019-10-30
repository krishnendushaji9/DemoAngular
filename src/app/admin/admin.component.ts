import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
  
  reserve(){
    this.authService.reserve();
    this.router.navigateByUrl('/reserve');
  }


  ngOnInit() {
  }

}
