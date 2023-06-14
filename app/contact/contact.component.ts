import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    fname :any
    lname :any
    email :any
    phone :any
    address :any
    message :any
    succFlag:boolean=false


  gentrateMessage(){
      this.fname = (<HTMLInputElement>document.getElementById('fname')).value;
      this.lname = (<HTMLInputElement>document.getElementById('lname')).value;
      this.email = (<HTMLInputElement>document.getElementById('email')).value;
      this.phone = (<HTMLInputElement>document.getElementById('contact')).value;
      this.address = (<HTMLInputElement>document.getElementById('address')).value;
      this.message = (<HTMLInputElement>document.getElementById('description')).value;

     let whatsappMessage = `Name: ${this.fname+" "+this.lname}\nContract: ${this.phone+" "+this.email}\nAddress: ${this.address}\n\nMessage: ${this.message}`;
    
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=9952053315&text=${encodedMessage}`;
      window.open(whatsappUrl);
      this.succFlag=true
      setTimeout(() => {
        location.reload()
      }, 5000);
  }
}
