import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  options = ['Option1', 'Option2', 'Option3', 'Option4'];
  contactForm = new FormGroup({
        name: new FormControl(),
        phone1: new FormControl(),
        phone: new FormControl(),
        options: new FormControl(),
        subject: new FormControl(),
        message: new FormControl()
  });


  constructor(private formBuilder: FormBuilder) { 
    this.createForm();
}

  createForm() {
    this.contactForm = this.formBuilder.group({
      name: '',
      phone1: '',
      phone: '',
      options: '',
      subject: '',
      message: ''
    });
}

scroll(el) {
  el.scrollIntoView();
}

  onSubmit() {

  }


}
