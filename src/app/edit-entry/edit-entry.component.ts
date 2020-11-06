import { Component, Input, OnInit } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css']
})
export class EditEntryComponent implements OnInit {
  @Input()
  entry: Entry;


  constructor() { }

  ngOnInit(): void {
    console.log(this.entry)
  }

}
