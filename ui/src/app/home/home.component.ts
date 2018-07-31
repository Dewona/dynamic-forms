import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <article>
      <h1 class="p-3">
        <b>It's</b> my previously written application for research some Angular features. For the presentation
        I added some display functionality and wrote this technical note.
      </h1>
      <h1 class="p-3">
        <strong>Nested Form</strong> using Angular class 'FormArray' an Custom Validation approach for
        data inputs. The component called the 'expense' cause I would like to use meaningful names for inputs.
        In my opinion 'FormArray' is a good tool if you would like to copy some parts of form many times.
        I had some similar tasks earlier, but in Kendo UI via jQuery. jQuery I used a several
        times, but I am not specialist in it. Used $ with dictionary :) I used my custom Validator in
        'expense.component.ts' - the 'dateLessThan' method. The custom Validator added after all controls in
        model. A good style is to create a separate class for all custom Validators. It is probably better to
        make such a class static. For testing populate input 'Date To' with less date than 'Date From'.
      </h1>
      <h1 class="p-3">
        <strong>Dynamic Form</strong> represents a reactive style of programming. It has something shared
        with code first approach  in C# Entity Framework. First you write model via TypeScript, than bind model
        to UI. Also, I use my custom classes for the controls in the factory method to make them dynamic.
        But I implemented only inputs with type text and selects. The 'dynamic-form-module' can be used
        in any projects. Just adding this module in your solution and importing it in core module. It expects
        'Observable' objects with strict structure. The module can not sends requests. It can create form, validate
        and rendering the form, emit form data to parent component - 'dynamic-form-wrapper'. Parent component
        called requests (or used hard coded configs), shared form difinisions and values with 'dynamic-form-module',
        take emitted filled form data and does with this data whatever it wants. This structure represents
        single responsibility principle - components from 'dynamic-form-module' work with form and
        'dynamic-form-wrapper' communicates with the environment: this component can be called by routing and
        he receives the data via the service.
      </h1>
      <h1 class="p-3">
        <b>You</b> can test the module with service which called NodeJs api or just use configs. I left configs
        because they are more readable and easire to use (NodeJs is not needed anymore). There is one very
        important stuff in Reactive Form - they are more easily expanded than Template-driven Form. And you
        can just quick look on the model in ts-file and have a all information without scrolling a lot of HTML.
        And more advanced validation.
      </h1>
      <h1 class="p-3">
        <b>Unfortunately</b> I did not use much css, only Bootstrap. There were no styles when I researched Reactive
        Forms and I added Bootstrap in a hurry. In the end I would like to to note that in this test
        projet was used pattern 'Observable' of RxJs library.It would be interesting to combine both approaches -
        dynamic form creation with the possibility of duplicating this form or some part of it.
      </h1>
    </article>
  `,
})
export class HomeComponent {
}
