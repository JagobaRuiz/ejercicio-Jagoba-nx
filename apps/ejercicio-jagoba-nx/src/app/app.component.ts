import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {BuscarIssueComponent} from "./components/buscar_issue/buscar_issue.component";
import {HttpClientModule} from "@angular/common/http";
import {GithubService} from "./services/github.service";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BuscarIssueComponent, HttpClientModule],
  providers: [HttpClientModule, GithubService],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ejercicio-jagoba-nx';
}
