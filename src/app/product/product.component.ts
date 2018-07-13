import { Component, OnInit } from '@angular/core';
import { myfirstService } from  '../app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // myArray= ['nazeer','karthi','dilip','arzath'];
  myArray= [1,2,3,4,5,6];
  data;
  geteditData;

index;
  constructor(public obj: myfirstService) {
    this.data =  this.obj.myData;
    console.log(this.data)
    
   }
   

   editData(ip){
   let user = ip;
   this.obj.editData(user);
  //  this.geteditData = this.obj.editData(eval);
   console.log("Returning editData", this.obj.editData(eval));
    // this.index = this.obj.myData;
   }
   
    deleteData(index){
      console.log("Delete Me", index);
      
      this.obj.deleteData(index);
      

    }
  ngOnInit() {
  }
  
}
