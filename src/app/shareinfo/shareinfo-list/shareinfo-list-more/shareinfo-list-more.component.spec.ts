import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareinfoListMoreComponent } from './shareinfo-list-more.component';

describe('ShareinfoListMoreComponent', () => {
  let component: ShareinfoListMoreComponent;
  let fixture: ComponentFixture<ShareinfoListMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareinfoListMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareinfoListMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
