import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarIssueComponent } from './buscar_issue.component';

describe('BuscarIssueComponent', () => {
  let component: BuscarIssueComponent;
  let fixture: ComponentFixture<BuscarIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarIssueComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
