import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-work-area',
  templateUrl: './work-area.component.html',
  styleUrls: ['./work-area.component.css']
})
export class WorkAreaComponent implements OnInit {

  constructor(private userService: UserService, private router: Router){ }

  ngOnInit() {
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
