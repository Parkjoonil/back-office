import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailMoreComponent } from './project-detail-more.component';

describe('ProjectDetailMoreComponent', () => {
  let component: ProjectDetailMoreComponent;
  let fixture: ComponentFixture<ProjectDetailMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
