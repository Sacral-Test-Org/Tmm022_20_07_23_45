import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PartValidationComponent } from './part-validation.component';
import { PartValidationRoutingModule } from './part-validation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxLoggerModule } from 'ngx-logger';

@NgModule({
  declarations: [
    PartValidationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PartValidationRoutingModule,
    SharedModule,
    NgxLoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    })
  ]
})
export class PartValidationModule { }
