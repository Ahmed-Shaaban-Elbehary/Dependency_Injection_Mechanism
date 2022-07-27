import { LoggingService } from './logging.service';
import { Directive, Host, Optional, Self, } from '@angular/core';

@Directive({
  selector: '[appParent]',
  providers: [LoggingService]
})

export class ParentDirective {

  constructor(@Optional() @Self() private logger: LoggingService) {
    if (this.logger) {
      this.logger.prefix = "Parent";
    }
  }

}
