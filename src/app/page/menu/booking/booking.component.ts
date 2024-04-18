import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LiffService } from 'src/app/liff.service';
declare var liff: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  userId = '';
  displayName = '';

  constructor(private router: Router, private liffService: LiffService) {}

  ngOnInit() {
    //bookung LIFF 網址
    //https://liff.line.me/1660683719-Zr7yyWVo
    const liffId = '1660683719-Zr7yyWVo';
    this.liffService.initLIFF(liffId).then((profile) => {
      const userData = this.liffService.getUserData();
      this.displayName = userData.displayName;
      this.userId = userData.userId;
      this.router.navigateByUrl('/booking');
    });
  }
}
