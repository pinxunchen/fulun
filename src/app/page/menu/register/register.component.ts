import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LiffService } from 'src/app/liff.service';

declare var liff: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userId = '';
  displayName = '';
  name: string | null = null;
  id: string | null = null;
  phone1: string | null = null;
  phone2: string | null = null;
  relation1: string | null = null;
  relation2: string | null = null;
  city: string | null = null;
  district: string | null = null;
  address: string | null = null;
  cities: string[] = ['台北市', '新北市', '桃園市', '花蓮市'];
  districts: { [key: string]: string[] } = {
    '台北市': ['北投區', '士林區', '大同區', '中山區', '萬華區', '中正區', '大安區', '松山區', '信義區', '內湖區', '南港區', '文山區'],
    '新北市': [  '板橋區', '三重區', '中和區', '永和區', '新莊區', '新店區', '土城區', '蘆洲區',
    '樹林區', '汐止區', '鶯歌區', '三峽區', '淡水區', '瑞芳區', '五股區', '泰山區',
    '林口區', '深坑區', '石碇區', '坪林區', '三芝區', '石門區', '八里區', '平溪區',
    '雙溪區', '貢寮區', '金山區', '萬里區', '烏來區'],
    '桃園市': ['桃園區','龜山區','蘆竹區','中壢區','八德區','平鎮區','大溪區','龍潭區','楊梅區','大園區','新屋區','復興區','觀音區'],
    '花蓮市': ['花蓮市','吉安鄉','新城鄉','壽豐鄉','秀林鄉','鳳林鎮',],
  };

  registerForm: FormGroup;

  constructor(
    private router: Router,
    private liffService: LiffService,
    private formBuilder: FormBuilder
  ) {
    // 初始化表单
    this.registerForm = this.formBuilder.group({
      userId: [''],
      displayName: [''],
      name: ['', [Validators.required]],
      city: ['', Validators.required],
      district: ['', Validators.required],
      address: ['', Validators.required],
      phone1: ['', [Validators.required, Validators.minLength(8)]],
      relation1: [''],
      phone2: [''],
      relation2: [''],
      id: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit() {
    // register LIFF 網址
    const liffId = '1660683719-4N2ppZbQ';
    this.liffService.initLIFF(liffId).then((profile) => {
      const userData = this.liffService.getUserData();
      this.displayName = userData.displayName;
      this.userId = userData.userId;
    });
  }


  closeLiffWindow() {
    liff.closeWindow();
  }

  onCityChange() {
    const districtControl = this.registerForm.get('district');
    if (districtControl?.value) {
      districtControl.setValue('');
    }
  }

  onSubmit() {
    const formData = this.registerForm.value;
    formData.userId = this.userId;
    formData.displayName = this.displayName;
    console.log('Form Data:', formData);
  }
}
