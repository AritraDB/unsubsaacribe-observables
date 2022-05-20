import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionOneComponent } from './option-one/option-one.component';
import { OptionTwoComponent } from './option-two/option-two.component';
import { OptionThreeComponent } from './option-three/option-three.component';
import { OptionFourComponent } from './option-four/option-four.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorClass } from './http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    OptionOneComponent,
    OptionTwoComponent,
    OptionThreeComponent,
    OptionFourComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorClass,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
