import { TestBed } from '@angular/core/testing';

import { GifsService } from 'src/app/gifs/services/gifs.service';
import { HttpClientModule } from '@angular/common/http';

describe('GifsService', () => {
  let service: GifsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(GifsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
