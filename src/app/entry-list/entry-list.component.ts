import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from, Subscription } from 'rxjs';
import { EntryService } from './../entry.service';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  clickEventsubscription: Subscription;


  entry: Entry
  private entriesURL = 'api/entries';  // URL to web api

  entryList: Entry[];

  constructor(private http: HttpClient, private sharedService: EntryService) {
    this.clickEventsubscription = this.sharedService.getClickEvent().subscribe(() => {
      this.getEntries();
    })
  }

  ngOnInit(): void {
    this.getEntries()

  }

  //TODO: Need a seperate component for each entry, then calculate the outline list ang the full star list for each 

  getEntries() {
    this.http.get<Entry[]>(this.entriesURL).subscribe(entries => this.entryList = entries)
  }

}
