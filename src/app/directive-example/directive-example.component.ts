import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {

  constructor() { }
stringArray: string[] = [
  "heloo",
  "aloo",
  "aloo",
  "Fu Fuu",
  "alo, alooo"
];
  ngOnInit(): void {
  }

}
