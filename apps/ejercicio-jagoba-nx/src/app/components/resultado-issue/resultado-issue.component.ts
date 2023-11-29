import {Component, Input, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'angular-monorepo-resultado-issue',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './resultado-issue.component.html',
  styleUrl: './resultado-issue.component.css'
})
export class ResultadoIssueComponent {

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  @Input() incidencia: any = {};

}
