import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "assets\\Logo.jpg";
  url = "https://www.bridgelabz.com"
  userName: string ="Abhishek";
  nameError: string= "";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }

  onClick($event: any){
    console.log("Save button is clicked!", $event);
    window.open(this.url,"_blank");
  }

  onInput($event: Event) {
    const inputElement = $event.target as HTMLInputElement;
    this.userName = inputElement.value; // Update userName from input field
  
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
    } else {
      this.nameError = "Name is incorrect";
    }
  }
}
