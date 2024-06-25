import { Component } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatCard,
  MatCardActions,
  MatCardContent
} from '@angular/material/card';
import { MatAnchor, MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSlider } from '@angular/material/slider';
import { MatOption } from '@angular/material/autocomplete';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatSlideToggle,
    MatCard,
    MatCardContent,
    MatCardActions,
    MatButton,
    RouterLink,
    MatToolbar,
    MatSlider,
    MatOption,
    MatFormField,
    MatSelect,
    MatRadioButton,
    MatRadioGroup,
    MatCheckbox,
    MatInput,
    MatAnchor,
    MatIcon,
    MatHint,
    MatLabel,
    MatDivider
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open('Material works!', 'Close', {
      duration: 4000
    });
  }
}
