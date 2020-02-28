import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsujiComponent } from './tsuji.component';

describe('TsujiComponent', () => {
  let component: TsujiComponent;
  let fixture: ComponentFixture<TsujiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsujiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsujiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
