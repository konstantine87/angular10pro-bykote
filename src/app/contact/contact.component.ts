import { Component, OnInit, Input } from '@angular/core';
import {ContactService} from '../contact.service';
import{ FormControl, ReactiveFormsModule, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() inputSearch: string = "";

  contactForm = new FormGroup({
    idControl: new FormControl(''),
    nameControl: new FormControl(''),
    mailControl: new FormControl('')
  });
  contactArray:any[] = [];
contactFullArray:any[] = [];
  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
this.contactService.getContacts().subscribe(
  data => { this.contactArray = data;
            this.contactFullArray = data;
  }
);

this.contactForm.patchValue({
  idControl: 101
})
  }
addNewContact(){
let newContact = this.contactForm.value;
let contactId = newContact.idControl;
let findContact = this.contactArray.findIndex((e: any) => e.id === contactId)
if(findContact >= 0){
  let element = this.contactArray.find((e: any) => e.id === contactId);
  element.id = newContact.idControl;
  element.name = newContact.nameControl;
  element.mail = newContact.mailControl;
} else {
this.contactArray.push({
  "id": newContact.idControl,
  "title": newContact.nameControl,
  "body": newContact.mailControl
});
this.contactForm.patchValue({
  idControl: newContact.idControl + 1
})
}

}
ngOnChanges(changes: any){
  for(let property in changes){
    if(property =="inputSearch"){
      var search = changes[property].currentValue;
      console.log(search);
      if(search != "" && search != undefined)
      {
        this.contactArray = this.contactFullArray.filter((x:any)=>
         x.id == search ||
        x.userId == search ||
        x.title.indexOf(search)> -1 ||
        x.body.indexOf(search)> -1
        );
  } else {
    this.contactArray = this.contactFullArray
  }
}
}
}
}
