import { Component, Input, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Issue } from 'src/app/models/repo.model';
import { RepoApiService } from 'src/app/services/repo-api.service';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {
  @Input() owner: string = '';
  @Input() repo: string = '';
  issues: Issue[] = [];
  state: string = 'open';

  constructor(private repoService: RepoApiService) { }

  ngOnInit(): void {
    this.loadIssues();
  }

  loadIssues(): void {
    this.repoService.getRepositoryIssues(this.owner, this.repo, this.state).subscribe({
      next: (issues) => {
        this.issues = issues;
      },
      error: (error) => {
        console.error('Error fetching issues:', error);
      }
    });
  }

  onStateChange(event: MatSelectChange): void {
    this.state = event.value; 
    this.loadIssues();
  }
}
