import { Component } from '@angular/core';
import { Entry } from './entry';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DiaryApp';
  private entriesURL = 'api/entries';  // URL to web api
  entryList: Entry[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getEntries()
  }

  getEntries() {
    this.http.get<Entry[]>(this.entriesURL).subscribe(entries => this.entryList = entries)
  }
}
