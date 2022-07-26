import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggingService], //used to provide services to be only local in there component, @Self()
})
export class AppComponent {
  /**
   * @Optional(): Parameter decorator to be used on constructor parameters,
   * which marks the parameter as being an optional dependency.
   * The DI framework provides null if the dependency is not found.
   */
  // constructor(@Optional() private loggingService: LoggingService) {
  //   this.loggingService.log("Constructor Init!");
  // }

  /**
   * Parameter decorator to be used on constructor parameters, which tells the DI framework to start dependency resolution from the local injector.
   * @Component(): our local injector for the component.
   * self instance.
   */
  // constructor(@Self() private loggingService: LoggingService) {
  // if (this.loggingService) {
  //   this.loggingService.prefix = "App Component";
  //   this.loggingService.log('Constructor Init!');
  // }

  /**
   *
   */
  constructor(
    @Self() private loggingService: LoggingService, //used local provider here.
    @SkipSelf() private parentSerivce: LoggingService //using node provider in parent
  ) {
    if (this.loggingService) {
      this.loggingService.prefix = 'from component provider';
      this.loggingService.log('Constructor Init!');
    }
    if(this.parentSerivce){
      this.loggingService.prefix = 'from service provider';
      this.loggingService.log('Constructor Init!');
    }
  }

  title = 'Dependency Injection Tutorial';
}
