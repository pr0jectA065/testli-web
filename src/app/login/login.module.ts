import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { LoginService } from './login.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CustomFormsModule,
        LoginRoutingModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        SharedModule,
        FlexLayoutModule.withConfig({ addFlexToParent: false })
    ],
    providers: [
        LoginService
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
