import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepoSearchComponent } from './components/repo-search/repo-search.component';
import { RepoDetailsComponent } from './components/repo-details/repo-details.component';
import { IssuesListComponent } from './components/issues-list/issues-list.component';
import { IssuesChartComponent } from './components/issues-chart/issues-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { MatListModule } from '@angular/material/list'; 

@NgModule({
  declarations: [
    AppComponent,
    RepoSearchComponent,
    RepoDetailsComponent,
    IssuesListComponent,
    IssuesChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgChartsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
