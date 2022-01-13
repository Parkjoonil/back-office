import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareidComponent } from './shareid.component';

describe('ShareidComponent', () => {
  let component: ShareidComponent;
  let fixture: ComponentFixture<ShareidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
