import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.userName = localStorage.getItem('username');

  }

  signOut() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('username');
    localStorage.removeItem('userrole');
    this.router.navigate(['/']);
  }
}
