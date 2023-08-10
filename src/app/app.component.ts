import { Component , OnInit} from '@angular/core';
import { LiffService } from './liff.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayName = '';
  userId: string = '';

  constructor(private liffService: LiffService) {}

  ngOnInit() {
    this.liffService.initLIFF();
  }

  printUserId() {
    const userId = this.liffService.getUserId();
    console.log('User ID:', userId);
  }

}
