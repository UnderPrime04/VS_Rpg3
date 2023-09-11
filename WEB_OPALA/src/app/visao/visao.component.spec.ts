import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaoComponent } from './visao.component';

describe('VisaoComponent', () => {
  let component: VisaoComponent;
  let fixture: ComponentFixture<VisaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisaoComponent]
    });
    fixture = TestBed.createComponent(VisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
