import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareinfoCardComponent } from './shareinfo-card.component';

describe('ShareinfoCardComponent', () => {
  let component: ShareinfoCardComponent;
  let fixture: ComponentFixture<ShareinfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareinfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareinfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
