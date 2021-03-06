import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInteractComponent } from './component-interact.component';

describe('ComponentInteractComponent', () => {
  let component: ComponentInteractComponent;
  let fixture: ComponentFixture<ComponentInteractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInteractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInteractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
