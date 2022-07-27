import { LoggingService } from './logging.service';
import { Directive, Host, Optional } from '@angular/core';

@Directive({
  selector: '[appChild]'
})

export class ChildDirective {
  /**
 * @Host() : Parameter decorator on a view-provider parameter of a class constructor that tells the DI framework to resolve the view by checking injectors of child elements, and stop when reaching the host element of the current component.
 */
  constructor(@Host() private logger: LoggingService) {
    if(this.logger)
    this.logger.log("Child Constructor Init!");
   }
}
