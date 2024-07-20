import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInitializationComponent } from './form-initialization.component';

const routes: Routes = [
  { path: '', component: FormInitializationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormInitializationRoutingModule { }
