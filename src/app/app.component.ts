import { Component } from '@angular/core';
declare const AOS: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'proyecto-bosque';

  ngOnInit() {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

}
