import { TestBed } from '@angular/core/testing';

import { CommpnUiService } from './commpn-ui.service';

describe('CommpnUiService', () => {
  let service: CommpnUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommpnUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
