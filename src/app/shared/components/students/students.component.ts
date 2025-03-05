import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('fname') fnameRef !: ElementRef;
  @ViewChild('lname') lnameRef !: ElementRef;
  @ViewChild('email') emailRef !: ElementRef;
  @ViewChild('contact') contactRef !: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }
onStdAdd(){
  let stdObj : Istudent = {
    fname : this.fnameRef.nativeElement.value,
    lname : this.lnameRef.nativeElement.value,
    email : this.emailRef.nativeElement.value,
    contact : this.contactRef.nativeElement.value
    
}

this.fnameRef.nativeElement.value = '';
this.lnameRef.nativeElement.value = '';
this.emailRef.nativeElement.value = '';
this.contactRef.nativeElement.value = '';
this.stdArr.push(stdObj);
}
}