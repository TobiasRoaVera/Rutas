import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlaDeMarComponent } from './ola-de-mar.component';

describe('OlaDeMarComponent', () => {
  let component: OlaDeMarComponent;
  let fixture: ComponentFixture<OlaDeMarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlaDeMarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlaDeMarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
