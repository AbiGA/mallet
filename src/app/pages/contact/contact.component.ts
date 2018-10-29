import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  options = ['Option1', 'Option2', 'Option3', 'Option4'];


  constructor() { 
    this.contactForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        name: new FormControl(),
        phone1: new FormControl(),
        phone: new FormControl(),
        options: new FormControl(),
        subject: new FormControl(),
        message: new FormControl()
       }),
      requestType: new FormControl(),
      text: new FormControl()
    });
  }

  ngOnInit() {
  }

}
