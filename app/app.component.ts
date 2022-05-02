import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  one = [2,3,6,9];
  two = [4,5,6];
  three = [1,5,8, 77]
  filtered = [];
  checked = false;
  // list = [this.one, this.two, this.three]


  includes = (arr1: Array<number>, arr2: Array<number>) => {
this.filtered =  arr2.filter(x => arr1.indexOf(x) > -1 === true);
this.checked = true;
}

  myTrackBy(index: number, obj: any): any {
    return  index;
  }
  // console.log(vals);
// return vals;

  // arr2.filter(arr1.includes(arr1), false);
  
  // arr2.map((x:number) => x.toLocaleString() + `${x} is the value.`)
  
  // arr1.las
}
