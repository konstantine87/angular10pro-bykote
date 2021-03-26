import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular10pro';
  searchWord: string = "";
  searchInput: string = "";


  searchData(){
    this.searchWord = this.searchInput;
  }
}
