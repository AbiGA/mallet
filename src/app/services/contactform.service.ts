import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ContactformService {
  private emailUrl = 'http://themallet.in/assets/formservice.php';
  private brochureUrl = 'http://themallet.in/assets/maildemo.php';
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

  sendBrochure(data): Observable<any> {
    const body = new URLSearchParams(data);
    body.set('email', data.email);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.brochureUrl, body.toString(), {
      headers : headers
    }).map(response => {
      console.log('Success', response);
      return response;
    })
    .catch(error => {
      //console.log('Some error ', error);
      return Observable.throw(error)
    })
}
}