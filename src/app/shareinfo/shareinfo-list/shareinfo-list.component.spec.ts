import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareinfoListComponent } from './shareinfo-list.component';

describe('ShareinfoListComponent', () => {
  let component: ShareinfoListComponent;
  let fixture: ComponentFixture<ShareinfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareinfoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareinfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
