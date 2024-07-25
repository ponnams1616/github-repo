import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Repository } from 'src/app/models/repo.model';
import { RepoApiService } from 'src/app/services/repo-api.service';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent {
  searchTerm: string = '';
  repositories: Repository[] = [];

  constructor(private repoService: RepoApiService, private router: Router) { }

  ngOnInit(): void {
    this.repoService.getStoredSearchTerm().subscribe(term => {
      this.searchTerm = term;
      if (term) {
        this.repoService.getStoredSearchResults().subscribe(repos => this.repositories = repos);
      }
    });
  }

  searchRepo(): void {
    if (this.searchTerm.trim()) {
      this.repoService.searchRepositories(this.searchTerm).subscribe(repos => {
        this.repositories = repos;
      });
    }
  }

  viewDetails(repo: Repository): void {
    this.router.navigate(['/repositories', repo.owner.login, repo.name]);
  }
}
