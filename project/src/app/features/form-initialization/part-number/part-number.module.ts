import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PartNumberComponent } from './part-number.component';

@NgModule({
  declarations: [PartNumberComponent],
  imports: [CommonModule, FormsModule],
  exports: [PartNumberComponent]
})
export class PartNumberModule { }