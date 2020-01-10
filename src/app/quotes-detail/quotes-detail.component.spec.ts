import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesDetailComponent } from './quotes-detail.component';

describe('QuotesDetailComponent', () => {
  let component: QuotesDetailComponent;
  let fixture: ComponentFixture<QuotesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
