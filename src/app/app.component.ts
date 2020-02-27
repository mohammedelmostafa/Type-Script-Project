import { Component } from '@angular/core';
import {Cars} from './Car';
import {empolyee} from './Car';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TypeScriptProject';
  
  bmw:Cars
  Mohammed:empolyee
  constructor(){
    // How to call Class in TypeScript
    //how to inhert class and passing parameter
    this.bmw= new Cars("BMW",2020)
    this.Mohammed =new empolyee("Mohammed",26)

    console.log("name is"+this.bmw.name)
    console.log("Model is"+this.bmw.model)
  }

}
