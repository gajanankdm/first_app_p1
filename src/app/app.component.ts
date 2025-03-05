import { Component } from '@angular/core';
import { Employee, Iperson } from './shared/models/persons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student Task!!!';
  skills : Array<string> =["JS","TS","Angular","Node"]
subjects : Array<string> =["english","marathi","hindi","biology","chemistry"]
animals : Array<string> =["Fox", "Lion", "Snake", "Tiger", "monkey", ];

persons : Array<Iperson> =[
  {
    fname : "john",
    lname : "doe",
    email : "john@gmail.com",
    contact : 8552043308
  },
  {
    fname : "gk",
    lname : "patil",
    email : "gk@gmail.com",
    contact : 2211457511
  },
  {
    fname : "manik",
    lname : "kadam",
    email : "mk@gmail.com",
    contact : 33254587884
  },

{
  fname : "shankar",
  lname : "patil",
  email : "sk@gmail.com",
  contact : 9797975522
},
]
students : Array<Iperson> =[
  {
    fname : "john",
    lname : "doe",
    email : "john@gmail.com",
    contact : 1122334455
  },
{
  fname : "pavan",
  lname : "kadam",
  email : "pavan@gmail.com",
  contact : 9988774444
},{
  fname : "hanuman",
  lname : "kadam",
  email : "hanuman@gmail.com",
  contact : 66555222215
},{
  fname : "balasaheb",
  lname : "kadam",
  email : "bk@gmail.com",
  contact : 9988774444

}]

employees : Array<Employee> =[
  {
    id:1,
    name:"john",
    salary:10000,
    permanent:"NO",
    dateOfBirth: new Date('1999-08-09')
  },
  {
    id:2,
    name:"samir",
    salary:20000,
    permanent:"yes",
    dateOfBirth: new Date('2000-02-02')
  },
  {
    id:3,
    name:"sunil",
    salary:30000,
    permanent:"yes",
    dateOfBirth: new Date('2001-03-02')
  },
  {
    id:4,
    name:"rahul",
    salary:40000,
    permanent:"NO",
    dateOfBirth: new Date('2000-08-08')
  }
]
}
