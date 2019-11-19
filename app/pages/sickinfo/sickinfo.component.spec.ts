import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SickinfoComponent } from './sickinfo.component';

describe('SickinfoComponent', () => {
  let component: SickinfoComponent;
  let fixture: ComponentFixture<SickinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SickinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SickinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
