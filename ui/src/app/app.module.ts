import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { DynamicFormModule } from './dynamic-form-module/dynamic-form.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { DynamicFormWrapperComponent } from './dynamic-form-wrapper/dynamic-form-wrapper.component';
import { ExpenseComponent } from './expense/expense.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    DynamicFormWrapperComponent,
    ExpenseComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DynamicFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
