import { Component , OnInit} from '@angular/core';
import { LiffService } from './liff.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayName = '';
  userId = '';

  constructor(private liffService: LiffService) {}

  ngOnInit() {
    this.showDisplayName();
  }

  async showDisplayName() {
    const userData = await this.liffService.getUserData();
    if (userData && userData.displayName) {
      this.displayName = userData.displayName;
      console.log('User ID:', userData.userId);
    }
  }
}
