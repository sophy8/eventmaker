import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardNotFilteredCardComponent } from './dasboard-not-filtered-card.component';

describe('DasboardNotFilteredCardComponent', () => {
  let component: DasboardNotFilteredCardComponent;
  let fixture: ComponentFixture<DasboardNotFilteredCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardNotFilteredCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardNotFilteredCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
