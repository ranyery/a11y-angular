import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      yesNoAnswer: [
        {
          value: 'no',
          disabled: true,
        },
      ],
    });
  }

  public submit(): void {
    this.form.get('yesNoAnswer')?.disable();
    console.log(this.form.value);
  }
}
