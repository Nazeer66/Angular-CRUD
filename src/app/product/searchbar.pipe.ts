import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbar'
})
export class SearchbarPipe implements PipeTransform {

  transform(items: any[], value: any,label:string, args?: any): any {

    // console.log("items",items);
    // console.log("value",value);
    // console.log("label", label);
    if (!items) return [];
    if (!value) return  items;
    if (value == '' || value == null) return [];
   if(items.length >0){
    return items.filter(e => e[label].toLowerCase().indexOf(value) > -1)
    
   }
   }

}
