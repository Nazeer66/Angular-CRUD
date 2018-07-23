import { Component, OnInit } from '@angular/core';
import { myfirstService } from '../app.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  name:string;
  age:number;
  address:string;
  
  constructor(public obj: myfirstService) { 


  }

  ngOnInit() {
  }

  addData(){
    if(this.name != '' && this.age != null && this.address != '' ){
      this.obj.addNewData(this.name, this.age, this.address);
      console.log(this.name, this.age, this.address);
      this.name = "";
      this.age= null;
      this.address="";
    }
  }
  // editData(i){
  //   console.log("i",i)
  //   // this.name =
  // }
saveData(user){

}


}
