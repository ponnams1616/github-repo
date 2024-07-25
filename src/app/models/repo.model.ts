export interface Repository {
    id: number;
    name: string;
    description?: string;
    html_url: string;
    forks_count: number;
    stargazers_count: number;
    open_issues_count: number;
    owner: {
      login: string;
    };
  }
  export interface Issue {
    id: number;
    title: string;
    body?: string; 
    state: string;
    html_url: string;
  }
  
  