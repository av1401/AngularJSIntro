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

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }

  onClick($event: any){
    console.log("Save button is clicked!", $event);
    window.open(this.url,"_blank");
  }
}
