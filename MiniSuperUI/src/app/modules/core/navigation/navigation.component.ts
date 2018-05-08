import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isAdmin = false;
  constructor() { }

  ngOnInit() {
    console.log(localStorage.getItem('userrole'));
    if (localStorage.getItem('userrole').toString() == 'Admin') {
      this.isAdmin = true;
      console.log(this.isAdmin);
    }
    else {
    this.isAdmin = false;
      console.log(this.isAdmin);
    }
  }

}
