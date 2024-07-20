import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartValidationComponent } from './part-validation.component';

const routes: Routes = [
  { path: '', component: PartValidationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartValidationRoutingModule { }