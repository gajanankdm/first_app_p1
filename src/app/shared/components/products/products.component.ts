import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  isDisable  : boolean = true;
  protectCount : number = 0;
  protectImg : string = `https://plus.unsplash.com/premium_photo-1740708549031-fd00d8821c5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8`


  

  ngOnInit(): void {

    setTimeout(() => {
      this.isDisable = false;
    }, 2500);
  }
onProAdd(){
  if(this.protectCount < 5){
  this.protectCount++;
}
}
onProRemove(){
  
    this.protectCount--;
  
}
}