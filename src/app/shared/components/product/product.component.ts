import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productName : string = "samsung M31";
  productId : string = "ID12345678";
  userName : string = "Enter your name";
  isDisable: boolean = true;
  productImg : string =`https://plus.unsplash.com/premium_photo-1740708549031-fd00d8821c5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8`
productImg1 : string = `https://images.unsplash.com/photo-1740654227692-a00a3dd36e4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8`
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isDisable = false;
    }
    , 3000);
  }

}
