import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {

  newValue:any=0;
  ngOnInit():void{
    this.updateCounter();
  }

  updateCounter() {
    this.newValue = this.newValue + 1;
    if(this.newValue<4500){
      setTimeout(()=>{
        this.updateCounter();
      },1)
    }
  }


  
}
