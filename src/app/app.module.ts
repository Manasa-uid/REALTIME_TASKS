import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { I1, I2 } from './interceptors';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: I1,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: I2,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
