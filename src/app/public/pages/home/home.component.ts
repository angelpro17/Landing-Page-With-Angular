import { Component } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from "@angular/forms";
import { MatInput } from "@angular/material/input";
import { NgIf } from "@angular/common";
import { Router } from "@angular/router";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { BenefitsComponent } from "../benefits/benefits.component";
import { ContactComponent } from "../contact/contact.component";
import { HowItWorksComponent } from "../how-it-works/how-it-works.component";
import { PlansComponent } from "../plans/plans.component";
import { SecurityComponent } from "../security/security.component";
import { LoadingDialogComponent } from "../loading-dialog/loading-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import {TranslateModule} from "@ngx-translate/core";
import {AbouttheproductComponent} from "../abouttheproduct/abouttheproduct.component";
import {AbouttheteamComponent} from "../abouttheteam/abouttheteam.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButton,
    MatError,
    MatLabel,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    NgIf,
    MatProgressSpinnerModule,
    ToolbarComponent,
    BenefitsComponent,
    ContactComponent,
    HowItWorksComponent,
    PlansComponent,
    SecurityComponent,
    TranslateModule,
    AbouttheproductComponent,
    AbouttheteamComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  joinForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog) {
    this.joinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, this.institutionalEmailValidator]]
    });
  }

  institutionalEmailValidator(control: AbstractControl): ValidationErrors | null {
    const emailPattern = /^[uU]\d{9}@upc\.edu\.pe$/;
    const valid = emailPattern.test(control.value);
    return valid ? null : {invalidInstitutionalEmail: true};
  }

  onSubmit() {
    if (this.joinForm.valid) {
      const dialogRef = this.dialog.open(LoadingDialogComponent, {
        disableClose: true
      });

      // Establecer mensaje inicial
      dialogRef.componentInstance.message = 'Verificando su correo institucional';

      // Simulando un retraso de 3 segundos para la verificación
      setTimeout(() => {
        dialogRef.componentInstance.setSuccess();

        // Cerrar el diálogo después de 2 segundos
        setTimeout(() => {
          dialogRef.close();
          // Aquí podrías redirigir o hacer cualquier otra acción después de la verificación
          this.router.navigate(['/header']);
        }, 2000);
      }, 3000); // Cambia este tiempo si deseas un retraso diferente
    }
  }
}
