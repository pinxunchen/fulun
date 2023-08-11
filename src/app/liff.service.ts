import { Injectable } from '@angular/core';
declare var liff: any;

@Injectable({
  providedIn: 'root'
})
export class LiffService {
  userId: string = '';
  displayName: string = '';

  constructor() { }

  async initLIFF(liffId: string) {
    try {
      await liff.init({ liffId: liffId });
      if (!liff.isLoggedIn()) {
        liff.login();
      } else {
        const profile = await liff.getProfile();
        if (profile) {
          this.setUserData(profile.userId, profile.displayName); // 在初始化成功後設置 userId 和 displayName
          //console.log('User ID:', this.userId);
          //console.log('Display Name:', this.displayName);
        }
      }
      console.log('LIFF API 初始化成功!');
    } catch (error) {
      console.error('LIFF API 初始化失敗:', error);
    }
  }

  setUserData(userId: string, displayName: string) {
    this.userId = userId;
    this.displayName = displayName;
  }

  getUserData() {
    return {
      userId: this.userId,
      displayName: this.displayName
    };
  }
}
