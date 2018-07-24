import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { myfirstService } from '../app.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  myevent;
  myData;
  @Output() onbuttonclick = new EventEmitter();
  constructor(public obj: myfirstService) { }


  // onkeyUp(){
  //   this.myevent = this.obj.myData;
  //   console.log("myKeyup", this.myevent);

  // }

  ngOnInit() {
    
  this.onbuttonclick.emit(this.myData);

  }
  sendData(date:any){
    this.onbuttonclick.emit(this.myData);
}
}
