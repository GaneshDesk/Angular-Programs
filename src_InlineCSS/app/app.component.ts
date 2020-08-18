import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Demo of inline CSS</h1>
  <h3>Line 1</h3>
  <h3>Line 2</h3>
  <h3>Line 3</h3>
  <h3>Line 4</h3>`,
  styles: [`
  h3{
    color: blue
  }
  h1{
    color: red
  }
  `]
})
export class AppComponent {
  title = 'app';
}
