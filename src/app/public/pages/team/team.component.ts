import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'] // Cambia styleUrl a styleUrls
})
export class TeamComponent {
  team = [
    { id: '01', name: 'Joan Talizo', role: 'Scrum Master Desarrollador', extraRole: 'Front-End, Desarrollador UX/UI', photo: 'foto_Talizo%201.png' },
    { id: '02', name: 'Franky Mallma', role: 'Product Owner y Desarrollador Back-End', extraRole: '', photo: 'FrankyMallma.png' },
    { id: '03', name: 'Alessandro David', role: 'Desarrollador Full-Stack', extraRole: '', photo: 'AlessandroDavid.png' },
    { id: '04', name: 'Angel Anampa', role: 'Desarrollador-DevOps', extraRole: '', photo: 'Anampa_Angel.png' },
    { id: '05', name: 'Samuel Valera', role: 'Desarrollador Full-Stack', extraRole: '', photo: 'Valera_Samuel.png' }
  ];
}
