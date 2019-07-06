import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGraphsUiComponent } from './bar-graphs-ui.component';

describe('BarGraphsUiComponent', () => {
  let component: BarGraphsUiComponent;
  let fixture: ComponentFixture<BarGraphsUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarGraphsUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGraphsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
