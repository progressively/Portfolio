import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  template: '<nav> {{name}} </nav>'
})

export class NavigationComponent {
    name = 'Ruben Wagner';
}
