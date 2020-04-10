import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommpnUiComponent } from './commpn-ui.component';

describe('CommpnUiComponent', () => {
  let component: CommpnUiComponent;
  let fixture: ComponentFixture<CommpnUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommpnUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommpnUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
