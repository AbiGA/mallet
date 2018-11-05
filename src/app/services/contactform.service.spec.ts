import { TestBed, inject } from '@angular/core/testing';

import { ContactformService } from './contactform.service';

describe('ContactformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactformService]
    });
  });

  it('should be created', inject([ContactformService], (service: ContactformService) => {
    expect(service).toBeTruthy();
  }));
});
