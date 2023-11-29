import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GithubService} from "../../services/github.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ResultadoIssueComponent} from "../resultado-issue/resultado-issue.component";
import {NgxPaginationModule} from "ngx-pagination";

@Component({
  selector: 'angular-monorepo-buscar-issue',
  standalone: true,
  imports: [CommonModule, CommonModule, HttpClientModule, FormsModule, ResultadoIssueComponent, NgxPaginationModule],
  providers: [HttpClientModule],
  templateUrl: './buscar_issue.component.html',
  styleUrl: './buscar_issue.component.scss',
})
export class BuscarIssueComponent {

  loading: boolean = false;
  mostrarFormulario = true;
  showPage = false;

  p: number = 1;

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  issues: any[] = [];

  constructor(private github: GithubService) {

  }

  buscar(usuario: string, repositorio: string) {


    this.mostrarFormulario = false;
    this.loading = true;
    this.github.getIssues(usuario, repositorio)
      .subscribe((data: any) => {
        this.issues = data;
        this.loading = false;
        this.showPage = true;
        console.log('Issues: ', data);
      }, (error: any) => {
        this.loading = false;
        alert("Error: " + error + "\n \n ¡Inténtalo de nuevo!");
      })
  }




}
