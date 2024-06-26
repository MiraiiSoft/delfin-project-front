import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosUserComponent } from './datos-user.component';

describe('DatosUserComponent', () => {
  let component: DatosUserComponent;
  let fixture: ComponentFixture<DatosUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
