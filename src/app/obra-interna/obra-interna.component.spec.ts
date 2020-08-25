import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraInternaComponent } from './obra-interna.component';

describe('ObraInternaComponent', () => {
  let component: ObraInternaComponent;
  let fixture: ComponentFixture<ObraInternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObraInternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObraInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
