import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  prdcode=""
  name=""
  mandate=""
  expdate=""
  brand=""
  price=""
  sellername=""
  disname=""
  constructor(private api:ApiService) {}

  addproduct=()=>
  {
    let data:any={"prdcode":this.prdcode,"name":this.name,"mandate":this.mandate,"expdate":this.expdate,"brand":this.brand,"price":this.price,"sellername":this.sellername,"disname":this.disname}
    console.log(data)
    this.api.addproduct(data).subscribe(
      (response:any)=>
      {
        console.log(response)
      }
    )
  }

}
