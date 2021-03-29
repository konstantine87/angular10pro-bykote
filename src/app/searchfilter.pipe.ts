import { Student } from './student';
import { Pipe, PipeTransform } from '@angular/core';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Students: Student[], searchValue: string): Student[] {
    if(!Students || !searchValue) {
      return Students;
    }
    return Students.filter(student => 
      student.Name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      student.City.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      student.Mail.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      student.MobileNo.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
