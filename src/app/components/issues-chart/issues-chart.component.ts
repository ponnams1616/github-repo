import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { RepoApiService } from 'src/app/services/repo-api.service';

@Component({
  selector: 'app-issues-chart',
  templateUrl: './issues-chart.component.html',
  styleUrls: ['./issues-chart.component.css']
})
export class IssuesChartComponent implements OnInit {
  @Input() owner: string = '';
  @Input() repo: string = '';
  
  public pieChartLabels: string[] = ['Open', 'Closed'];
  public pieChartData: ChartData<'pie', number[]> = {
    labels: this.pieChartLabels,
    datasets: [{ data: [0, 0] }]
  };
  public pieChartType: ChartType = 'pie';

  constructor(private repoService: RepoApiService) { }

  ngOnInit(): void {
    this.loadIssues();
  }

  loadIssues(): void {
    this.repoService.getRepositoryIssues(this.owner, this.repo, 'all').subscribe(issues => {
      const openIssues = issues.filter(issue => issue.state === 'open').length;
      const closedIssues = issues.filter(issue => issue.state === 'closed').length;
      this.pieChartData = {
        labels: this.pieChartLabels,
        datasets: [{ data: [openIssues, closedIssues] }]
      };
    }, error => {
      console.error('Error fetching issues:', error);
    });
  }
}
