import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {FooterComponent} from "../../components/footer/footer.component";
import {FeaturesComponent} from "../features/features.component";
import {SponsorComponent} from "../sponsor/sponsor.component";
import {TeamComponent} from "../team/team.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButton,
    FooterComponent,
    FeaturesComponent,
    SponsorComponent,
    TeamComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
