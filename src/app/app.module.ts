import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormGroupValidatorComponent } from './modules/form-group-validator/form-group-validator.component';

import { DynamicFormJsonComponent } from './modules/dynamic-form-json/dynamic-form-json.component';
import { JsonFormComponent } from './modules/dynamic-form-json/json-form/json-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    FormGroupValidatorComponent,
    DynamicFormJsonComponent,
    JsonFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    InputSwitchModule,
    SliderModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
