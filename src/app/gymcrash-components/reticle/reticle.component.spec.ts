import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReticleComponent } from './reticle.component';

describe('ReticleComponent', () => {
  let component: ReticleComponent;
  let fixture: ComponentFixture<ReticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
