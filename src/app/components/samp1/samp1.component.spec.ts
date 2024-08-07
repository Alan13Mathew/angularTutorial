import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Samp1Component } from './samp1.component';

describe('Samp1Component', () => {
  let component: Samp1Component;
  let fixture: ComponentFixture<Samp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Samp1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Samp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
