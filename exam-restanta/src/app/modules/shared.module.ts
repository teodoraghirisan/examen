import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WidgetsModule } from './widgets.module';
import { AuthService } from '../services/auth.service';
import { JwtInterceptor, ErrorInterceptor } from '../interceptors';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WidgetsModule
  ],
  exports: [
    WidgetsModule,
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
}) export class SharedModule { };
