import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ContactformService } from '../../services/contactform.service';


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


  constructor(private formBuilder: FormBuilder, private formService: ContactformService) { 
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

/*scroll(el) {
  el.scrollIntoView();
} */

submitForm(data) { console.log(data);
  this.formService.sendEmail(data)
    .subscribe(res => {
      console.log("Mail sent", res);
    }, error => {
      console.log("Failed",error);
    });
}

}
