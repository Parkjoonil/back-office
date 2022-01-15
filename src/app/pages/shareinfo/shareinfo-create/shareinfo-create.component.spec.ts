import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareinfoCreateComponent } from './shareinfo-create.component';

describe('ShareinfoCreateComponent', () => {
  let component: ShareinfoCreateComponent;
  let fixture: ComponentFixture<ShareinfoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareinfoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareinfoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
