import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPricipalComponent } from './pag-pricipal.component';

describe('PagPricipalComponent', () => {
  let component: PagPricipalComponent;
  let fixture: ComponentFixture<PagPricipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagPricipalComponent]
    });
    fixture = TestBed.createComponent(PagPricipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
