import { Component } from '@angular/core';
import {Cars,empolyee,CreditOP} from './Car';

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
    this.Mohammed =new empolyee("Mohammed",26,123456,123)

    console.log("name is"+this.bmw.name);
    console.log("Model is"+this.bmw.model);
    console.log("Model is"+this.Mohammed.FullName);
    console.log("Model is"+this.Mohammed.Age);
    this.Mohammed.GetCreaditID();
    console.log(this.Mohammed.GetCreditPass())
    this.Mohammed.CreditLogIn(123);
    this.Mohammed.machine="ATM 2";
    this.Login(this.Mohammed,1234)
  }

  Login(Oper1:CreditOP,pass:number){
    switch (Oper1.machine) {
      case "ATM 1":
        console.log("ATM is "+Oper1.machine);
      Oper1.CreditLogIn(pass);
        break;
    
      case"ATM 2":
      console.log("ATM is "+Oper1.machine);
      Oper1.CreditLogIn(pass);
        break;
    }


  }

}
