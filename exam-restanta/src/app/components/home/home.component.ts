import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {

    }

    
  ngOnInit() {
   
  }

  home() {
    this.router.navigate(['']);
  }

  usersManagement() {
    this.router.navigate(['/users']);
  }

  
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

