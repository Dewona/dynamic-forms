import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ExpenseComponent} from './expense/expense.component';
import { DynamicFormWrapperComponent } from './dynamic-form-wrapper/dynamic-form-wrapper.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'expense', component: ExpenseComponent},
  {path: 'dynamic-form-wrapper', component: DynamicFormWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
