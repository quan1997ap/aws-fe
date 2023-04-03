import { FormGroupValidatorComponent } from './modules/form-group-validator/form-group-validator.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicFormJsonComponent } from './modules/dynamic-form-json/dynamic-form-json.component';
import { JsonFormComponent } from './modules/dynamic-form-json/json-form/json-form.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dynamic-form-json',
  },
  {
    path: 'form-group-validator',
    pathMatch: 'full',
    component: FormGroupValidatorComponent
  },
  {
    path: 'dynamic-form-json',
    pathMatch: 'full',
    component: DynamicFormJsonComponent
  },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
