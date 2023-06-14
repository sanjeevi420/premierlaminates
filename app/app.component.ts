import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'premier-laminates';

  flag=true;

  constructor(private route:Router){}

  ngDoCheck():void{
    if(this.route.url==="/contact"){
      this.flag=false
    }
  }


}
