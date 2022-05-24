import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpolyerComponent } from './create-empolyer.component';

describe('CreateEmpolyerComponent', () => {
  let component: CreateEmpolyerComponent;
  let fixture: ComponentFixture<CreateEmpolyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmpolyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmpolyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
