import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvDetails } from './details';

describe('Details', () => {
  let component: MvDetails;
  let fixture: ComponentFixture<MvDetails>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MvDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
