import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-expense',
  templateUrl: 'expense.component.html',
  styles: [
    `
      .error-message {
        color: red;
        font-weight: bold;
      }
    `
  ]
})
export class ExpenseComponent {
  form: FormGroup;
  output = 'OUTPUT';
  public workLocationTypes = [
    { key: 1, value: 'Airfare' },
    { key: 2, value: 'Lodging' },
    { key: 3, value: 'Car Rental' },
    { key: 4, value: 'Mileage' },
    { key: 4, value: 'Meals' }
  ];


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      expense: this.fb.array([])
    });
    this.addItemRows();
  }

  addItemRows() {
    const ctrl = <FormArray>this.form.controls.expense;
    ctrl.push(
      this.fb.group({
        workLocation: ['', Validators.required],
        from: ['', Validators.required ],
        to: ['', Validators.required ],
        totalAmount: ['', [Validators.required, Validators.min(0)]]
      }, {validator: this.dateLessThan('from', 'to')})
    );
  }

  onAddExpense() {
    this.addItemRows();
  }
  onSubmitForm() {
    this.output = JSON.stringify({
      formStatus: this.form.status,
      formValue: this.form.value
    });
    console.log(JSON.parse(this.output));
  }

  dateLessThan(from: string, to: string) {
    return (group: FormGroup): {[key: string]: any} => {
     const f = group.controls[from];
     const t = group.controls[to];
     if (f.value > t.value) {
       return {
         dates: `'Date From' should be less than 'Date To'`
       };
     }
     return {};
    };
  }
}
