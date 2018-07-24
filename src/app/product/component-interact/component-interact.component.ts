import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interact',
  templateUrl: './component-interact.component.html',
  styleUrls: ['./component-interact.component.css']
})
export class ComponentInteractComponent implements OnInit {
  date ="Hi how are you";
  @Input() parentdt;
@Output() childComponent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // this.childComponent.emit(new Date().toLocaleString());
  }

  sendComponentToParent(date:any){
    this.childComponent.emit('I am coming from Child')
  }
  
}
