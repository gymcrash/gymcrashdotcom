import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdevPageComponent } from './webdev-page.component';

describe('WebdevPageComponent', () => {
  let component: WebdevPageComponent;
  let fixture: ComponentFixture<WebdevPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebdevPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebdevPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
