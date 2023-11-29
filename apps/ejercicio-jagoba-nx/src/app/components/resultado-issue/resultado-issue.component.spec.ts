import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoIssueComponent } from './resultado-issue.component';

describe('ResultadoIssueComponent', () => {
  let component: ResultadoIssueComponent;
  let fixture: ComponentFixture<ResultadoIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoIssueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultadoIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
