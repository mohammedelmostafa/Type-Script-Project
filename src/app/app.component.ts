import { Component } from '@angular/core';
import {Cars} from './Car';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TypeScriptProject';
  
  constructor(){
    // How to call Class in TypeScript
    new Cars(); 
  }

}
