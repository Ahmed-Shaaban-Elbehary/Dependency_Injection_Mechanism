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
   * @SkipSelf() : Parameter decorator to be used on constructor parameters, which tells the DI framework to start dependency resolution from the parent injector. Resolution works upward through the injector hierarchy, so the local injector is not checked for a provider.
   */
  // constructor(@SkipSelf() private parentService: LoggingService) {
  //   if(this.parentService)
  //   {
  //     this.parentService.log("Constructor Init!")
  //   }
  // }
  title = 'Dependency Injection Tutorial';
}
