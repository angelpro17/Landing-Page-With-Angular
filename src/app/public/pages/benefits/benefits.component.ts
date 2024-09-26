import { Component } from '@angular/core';
import {MatCard, MatCardAvatar, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [
    MatCardContent,
    MatCardTitle,
    MatCardAvatar,
    MatCardHeader,
    MatCard,
    NgForOf
  ],
  templateUrl: './benefits.component.html' ,
  styleUrl: './benefits.component.css'
})
export class BenefitsComponent {
  beneficios = [
    { icono: 'pig.png', titulo: 'Ahorra dinero', descripcion: 'Comparte los gastos de transporte con tus compañeros y reduce tus costos diarios.' },
    { icono: 'people.png', titulo: 'Haz nuevos amigos', descripcion: 'Conoce a otros estudiantes y amplía tu círculo social universitario.' },
    { icono: 'leaf.png', titulo: 'Cuida el medio ambiente', descripcion: 'Reduce tu huella de carbono compartiendo viajes con otros estudiantes.' },
    { icono: 'shield.png', titulo: 'Viaja Seguro', descripcion: 'Disfruta de un sistema de verificación de usuarios para mayor tranquilidad.' },
    { icono: 'clock.png', titulo: 'Flexibilidad', descripcion: 'Adapta tus viajes a tu horario y necesidades universitarias.' },
    { icono: 'graduation_hat.png', titulo: 'Comunidad Universitaria', descripcion: 'Forma parte de una red exclusiva de estudiantes de tu universidad.' }
  ];
}
