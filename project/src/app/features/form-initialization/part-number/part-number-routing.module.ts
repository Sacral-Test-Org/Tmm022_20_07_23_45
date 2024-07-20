import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartNumberComponent } from './part-number.component';

const routes: Routes = [
  { path: '', component: PartNumberComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartNumberRoutingModule { }
