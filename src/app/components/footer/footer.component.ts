import { Component, OnInit } from '@angular/core';
import { ContactformService } from '../../services/contactform.service';
import {Router} from "@angular/router"
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private formService: ContactformService, private router: Router) { }

  brochureForm = new FormGroup({
    email: new FormControl()
});

  ngOnInit() {
  }

  submitForm(data) { console.log(data);
    this.formService.sendBrochure(data)
      .subscribe(res => {
        alert("Thank you! You will receive our catalogue shortly. ");
        this.router.navigate(['/home']);
        this.brochureForm.reset();
        //console.log("Mail sent", res);
      }, error => {
        alert("Please try again later.");
      //  console.log("Failed",error);
      });
  }

}
