import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ContactformService {
  private emailUrl = 'http://themallet.in/assets/formservice.php';
  constructor(private http: Http) { }
  
  sendEmail(data): Observable<any> {
    return this.http.post(this.emailUrl, data)
      .map(response => {
        //console.log('Success', response);
        return response;
      })
      .catch(error => {
        //console.log('Some error ', error);
        return Observable.throw(error)
      })
  }
}
 
