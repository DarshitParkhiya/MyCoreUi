import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideLayoutComponent } from './aside-layout.component';

describe('AsideLayoutComponent', () => {
  let component: AsideLayoutComponent;
  let fixture: ComponentFixture<AsideLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
