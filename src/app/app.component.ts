import { Component , OnInit} from '@angular/core';
import { LiffService } from './liff.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userId = '';

  constructor(private liffService: LiffService) {}

  ngOnInit() {
    const liffId = '1660683719-4N2ppZbQ';
    this.liffService.initLIFF(liffId);
  }


}
