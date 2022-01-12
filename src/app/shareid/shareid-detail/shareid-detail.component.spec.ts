import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareidDetailComponent } from './shareid-detail.component';

describe('ShareidDetailComponent', () => {
  let component: ShareidDetailComponent;
  let fixture: ComponentFixture<ShareidDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareidDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareidDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
