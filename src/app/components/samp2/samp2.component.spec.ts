import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Samp2Component } from './samp2.component';

describe('Samp2Component', () => {
  let component: Samp2Component;
  let fixture: ComponentFixture<Samp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Samp2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Samp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
