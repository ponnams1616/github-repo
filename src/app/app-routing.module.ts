import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoSearchComponent } from './components/repo-search/repo-search.component';
import { RepoDetailsComponent } from './components/repo-details/repo-details.component';

const routes: Routes = [
  { path: '', component: RepoSearchComponent },
  { path: 'repositories/:owner/:repo', component: RepoDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
