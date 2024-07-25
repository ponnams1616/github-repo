import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from 'src/app/models/repo.model';
import { RepoApiService } from 'src/app/services/repo-api.service';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {
  repository: Repository | undefined;
  totalIssuesCount: number = 0;
  constructor(private route: ActivatedRoute, private repoService: RepoApiService) { }

  ngOnInit(): void {
    const owner = this.route.snapshot.paramMap.get('owner');
    const repoName = this.route.snapshot.paramMap.get('repo');
    if (owner && repoName) {
      this.repoService.getRepositoryDetails(owner, repoName).subscribe(repo => {
        this.repository = repo;
        this.loadAllIssues(owner, repoName);
      });
    }
  }
  loadAllIssues(owner: string, repo: string): void {
    this.repoService.getRepositoryIssues(owner, repo, 'all').subscribe(issues => {
      this.totalIssuesCount = issues.length;
    });
  }
}
