import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogmasComponent } from './dogmas.component';

describe('DogmasComponent', () => {
  let component: DogmasComponent;
  let fixture: ComponentFixture<DogmasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogmasComponent]
    });
    fixture = TestBed.createComponent(DogmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
