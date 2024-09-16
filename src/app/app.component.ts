//https://docs.angular.lat/guide/inputs-outputs

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
  title = 'child-parent';

   items=["hi","hello"];

   childEvent(data:string)
   {
    this.items.push(data);
  }
 }
