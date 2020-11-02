import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
// MDB Angular Free

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  entryTitle = new FormControl('');
  entryBody = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

  saveData() {
    console.log(this.entryTitle.value)
    console.log(this.entryBody.value)
  }

}
