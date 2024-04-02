import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuRoutingModule } from './page/menu/menu-routing.module';
import { MenuComponent } from './page/menu/menu.component';
import { HeaderComponent } from './core/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './core/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LiffService } from './liff.service';

@NgModule({
  declarations: [AppComponent, MenuComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    MenuRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [LiffService],
  bootstrap: [AppComponent],
})
export class AppModule {}
