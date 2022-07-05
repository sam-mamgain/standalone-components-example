import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooDirective } from './directives/foo.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [FooDirective, CommonModule]
})
export class AppComponent {
  title = 'standalone-components-example';
}
