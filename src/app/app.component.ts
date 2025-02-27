import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'I love angular from Ts file !!!';
  skills : Array<string> =["JS","TS","Angular","Node"]
subjects : Array<string> =["english","marathi","hindi","biology","chemistry"]
animals : Array<string> =["Fox", "Lion", "Snake", "Tiger", "monkey", ]

}
