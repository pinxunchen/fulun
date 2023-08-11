import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LiffService } from 'src/app/liff.service';
declare var liff: any;



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit  {
  userId = '';
  displayName = '';

  constructor(private router: Router,private liffService: LiffService) {}

  ngOnInit() {
    //會員綁定LIFF 網址
    //https://liff.line.me/1660683719-ljBkk0dx
    const liffId = '1660683719-4N2ppZbQ';
    this.liffService.initLIFF(liffId).then(profile => {
      const userData = this.liffService.getUserData();
      this.displayName = userData.displayName;
      this.userId = userData.userId;
    });
  }

  printUserId() {
    console.log('User ID:', this.userId);
    console.log('Display Name:', this.displayName);
  }

  closeLiffWindow() {
    liff.closeWindow();
  }
}
