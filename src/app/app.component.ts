import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Custom Theming with Bootstrap 4';

  setTheme(theme: string) {
    window['switchStyle'](theme);
    localStorage.setItem('myapp-theme', theme); // same key as in 'load-style.js'
  }
}
