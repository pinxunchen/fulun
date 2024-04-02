import { Component } from '@angular/core';
import { LiffService } from 'src/app/liff.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {
  constructor(private liffService: LiffService) {}

  ngOnInit(): void {
    console.log(this.liffService.userId, this.liffService.displayName);
  }
}
