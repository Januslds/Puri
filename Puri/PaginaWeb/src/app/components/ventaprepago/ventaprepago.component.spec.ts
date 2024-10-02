import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaprepagoComponent } from './ventaprepago.component';

describe('VentaprepagoComponent', () => {
  let component: VentaprepagoComponent;
  let fixture: ComponentFixture<VentaprepagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaprepagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaprepagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
