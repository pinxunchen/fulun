import { Injectable } from '@angular/core';
declare var liff: any;

@Injectable({
  providedIn: 'root'
})
export class LiffService {
  private liffId: string = '1660683719-4N2ppZbQ';
  userId: string = '';

  constructor() { }

  private loadLIFFScript() {
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://static.line-scdn.net/liff/edge/2/sdk.js';
      script.onload = () => resolve();
      script.onerror = () => reject('Failed to load LIFF SDK');
      document.head.appendChild(script);
    });
  }

  async initLIFF() {
    try {
      await this.loadLIFFScript();
      await liff.init({ liffId: this.liffId });
      if (!liff.isLoggedIn()) {
        liff.login();
      } else {
        const profile = await liff.getProfile();
        if (profile) {
          this.setUserId(profile.userId); // 在初始化成功後設置 userId
        }
      }
      console.log('LIFF API 初始化成功!');
    } catch (error) {
      console.error('LIFF API 初始化失敗:', error);
    }
  }
  setUserId(userId: string) {
    this.userId = userId;
  }
  getUserId() {
    return this.userId;
  }


}
