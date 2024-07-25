import { Injectable } from '@angular/core';
import { Issue, Repository } from '../models/repo.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoApiService {

  private readonly URL = 'https://api.github.com';

  private searchResultsSubject = new BehaviorSubject<Repository[]>([]);
  searchResults$ = this.searchResultsSubject.asObservable();

  private searchTermSubject = new BehaviorSubject<string>('');
  searchTerm$ = this.searchTermSubject.asObservable();

  constructor(private http: HttpClient) { }

  searchRepositories(query: string): Observable<Repository[]> {
    this.searchTermSubject.next(query);
    return this.http.get<any>(`${this.URL}/search/repositories?q=${query}`)
      .pipe(
        map(response => response.items),
        map(items => {
          this.searchResultsSubject.next(items);
          return items;
        })
      );
  }

  getRepositoryDetails(owner: string, repo: string): Observable<Repository> {
    return this.http.get<Repository>(`${this.URL}/repos/${owner}/${repo}`);
  }

  getRepositoryIssues(owner: string, repo: string, state: string): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${this.URL}/repos/${owner}/${repo}/issues?state=${state}`); 
  }

  getStoredSearchResults(): Observable<Repository[]> {
    return this.searchResults$;
  }

  getStoredSearchTerm(): Observable<string> {
    return this.searchTerm$;
  }
  
}
