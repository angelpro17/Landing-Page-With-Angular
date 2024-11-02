import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {NgIf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-abouttheproduct',
  standalone: true,
    imports: [
        MatButton,
        MatCard,
        NgIf,
        TranslateModule
    ],
  templateUrl: './abouttheproduct.component.html',
  styleUrl: './abouttheproduct.component.css'
})
export class AbouttheproductComponent {

}
