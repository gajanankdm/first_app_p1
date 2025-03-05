import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
stdArr : Array<Istudent>= [{
  fname : 'John',
  lname : 'Doe',
  email : 'john@gmail.com',
  contact : 8552043307
}]

  

  constructor() { }

  ngOnInit(): void {

  }
onStdAdd(
  fnameControl : HTMLInputElement,
  lnameControl : HTMLInputElement,
  emailControl : HTMLInputElement,
  contactControl : HTMLInputElement){
    
    let stdObj : Istudent = {
      fname : fnameControl.value,
      lname : lnameControl.value,
      email : emailControl.value,
      contact : +contactControl.value
  }
  
  
  fnameControl.value = '';
  lnameControl.value = '';
  emailControl.value = '';
  contactControl.value = '';
  console.log(stdObj);
  this.stdArr.push(stdObj);
}
}