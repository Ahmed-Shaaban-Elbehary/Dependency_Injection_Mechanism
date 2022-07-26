import { NgModule, Self } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /**
  * self instance.
  */
  // constructor(@Self() private loggingService: LoggingService) {
  //   if (this.loggingService) {
  //     this.loggingService.prefix = "App Module";
  //     this.loggingService.log('Constructor Init!');
  //   }
  // }
}
