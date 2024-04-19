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
      address: ['', Validators.required],
      phone1: ['', [Validators.required, Validators.minLength(8)]],
      phone2: [''],
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

  printUserId() {
    console.log('User ID:', this.userId);
    console.log('Display Name:', this.displayName);
  }

  closeLiffWindow() {
    liff.closeWindow();
  }

  onSubmit() {
    const formData = this.registerForm.value;
    formData.userId = this.userId;
    formData.displayName = this.displayName;
    console.log('Form Data:', formData);
  }
}
