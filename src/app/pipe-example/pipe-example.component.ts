import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
   

  currentDate: Date = new Date();
  word: string = "";
  num: number = 5;
  constructor() { }

  ngOnInit(): void {
  }
dateInGeorgian(){
  this.word = ("dges aris "+ this.currentDate.getDate() + "marti "+ this.currentDate.getFullYear() + " weli");
}
}
