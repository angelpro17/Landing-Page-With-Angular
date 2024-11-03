import { Component } from '@angular/core';
import {MatAnchor, MatButton, MatIconAnchor} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatOption} from "@angular/material/core";
import {MatFormField} from "@angular/material/form-field";
import {MatSelect} from "@angular/material/select";
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {LanguageSwitcherComponent} from "../language-switcher/language-switcher.component";
import {TranslateModule} from "@ngx-translate/core";
import {MatDivider} from "@angular/material/divider";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {NgIf} from "@angular/common";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatIconAnchor,
    MatIcon,
    MatAnchor,
    MatOption,
    MatFormField,
    MatSelect,
    MatToolbar,
    MatButton,
    RouterLink,
    LanguageSwitcherComponent,
    TranslateModule,
    MatDivider,
    MatMenu,
    NgIf,
    MatMenuTrigger
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  openLogin() {
    window.open('https://frontend-five-wheat-92.vercel.app/login', '_self'); // Abre el enlace en la misma pestaña
  }

  openRegister() {
    window.open('https://frontend-five-wheat-92.vercel.app/register', '_self'); // Abre el enlace de registro en la misma pestaña
  }
  isHandset = false;
  private destroy$ = new Subject<void>();

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        this.isHandset = result.matches;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
