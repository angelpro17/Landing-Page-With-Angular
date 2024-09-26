import { Component } from '@angular/core';
import {LanguageSwitcherComponent} from "../language-switcher/language-switcher.component";

@Component({
  selector: 'app-footer',
  standalone: true,
    imports: [
        LanguageSwitcherComponent
    ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
