import { Component, OnInit } from '@angular/core';
import { LiffService } from 'src/app/liff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  userId = '';
  displayName = '';

  constructor(private router: Router, private liffService: LiffService) {}

  ngOnInit() {
    //menu LIFF網址
    //https://liff.line.me/1660683719-ljBkk0dx
    const liffId = '1660683719-ljBkk0dx';
    this.liffService.initLIFF(liffId).then((profile) => {
      const userData = this.liffService.getUserData();
      this.displayName = userData.displayName;
      this.userId = userData.userId;
      this.router.navigateByUrl('/menu');
    });
  }

  printUserId() {
    console.log('User ID:', this.userId);
    console.log('Display Name:', this.displayName);
  }
}
