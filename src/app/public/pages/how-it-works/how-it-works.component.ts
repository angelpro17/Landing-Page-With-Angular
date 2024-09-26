import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardImage, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [
    MatCardContent,
    NgForOf,
    MatCard,
    MatCardTitle,
    MatCardImage
  ],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css'
})
export class HowItWorksComponent {
  steps = [
    {
      image: 'icon1.png',
      title: '1. Regístrate',
      description: 'Crea tu perfil con tu correo universitario y verifica tu cuenta'
    },
    {
      image: 'icon2.png',
      title: '2. Busca o Publica Viajes',
      description: 'Encuentra compañeros que vayan a tu universidad o publica tu ruta'
    },
    {
      image: 'icon3.png',
      title: '3. Viaja y Ahorra',
      description: 'Comparte gastos, reduce emisiones y haz nuevos amigos'
    }
  ];
}
