import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatGridList } from '@angular/material/grid-list';

@Component({
  selector: 'mat3-webcomponent',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggle, MatGridList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(router: Router) {
    router.initialNavigation();
  }
}
