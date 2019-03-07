import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ContactformService } from '../../services/contactform.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  options = ['Book a studio visit', 'Request a quote'];
  contactForm = new FormGroup({
        name: new FormControl(),
        phone1: new FormControl(),
        phone: new FormControl(),
        options: new FormControl(),
        subject: new FormControl(),
        message: new FormControl()
  });


  constructor(private formBuilder: FormBuilder, private formService: ContactformService, private router: Router) { 
    document.getElementById("product").style.color="#BDB299";
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
      alert("Contact form successfully submitted. Thank you, We will get back to you soon!");
      this.router.navigate(['/home']);
    //  console.log("Mail sent", res);
    }, error => {
   //   console.log("Failed",error);
    });
}

}
