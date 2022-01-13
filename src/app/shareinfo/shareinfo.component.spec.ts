import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareinfoComponent } from './shareinfo.component';

describe('ShareinfoComponent', () => {
  let component: ShareinfoComponent;
  let fixture: ComponentFixture<ShareinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
