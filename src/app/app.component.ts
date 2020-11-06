import { Component } from '@angular/core';
import { Entry } from './entry';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DiaryApp';
  private entriesURL = 'api/entries';  // URL to web api
  entryList: Entry[];
  testEntry: Entry

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getEntries()
    this.delay(1000)
    console.log(this.entryList)
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}

  getEntries() {
    this.http.get<Entry[]>(this.entriesURL).subscribe(entries => this.entryList = entries)
    this.http.get<Entry[]>(this.entriesURL).subscribe(entries => this.testEntry = entries[0])
    this.delay(10000)
    console.log("Test entry: " + this.testEntry)
  }
}
