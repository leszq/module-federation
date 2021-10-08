import { ChangeDetectionStrategy, Component } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  ngVersion = require('../../package.json').dependencies['@angular/core'];

  title = 'shell';
}
