
export class ContactRequest {
    personalData: PersonalData;
    requestType: any = '';
    text: string = '';
  }
  
  export class PersonalData {
    name: string = '';
    phone: string = '';
    options: string = '';
    subject: string = '';
    message: string = '';
  }