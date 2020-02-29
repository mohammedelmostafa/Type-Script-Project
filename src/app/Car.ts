import { expressionType } from '@angular/compiler/src/output/output_ast';

export class Cars{

    //must declare as public 
    //classعلي مستوي ال 
   public name:string;
   public model:number;

    constructor(name:string,model:number){
        console.log("This is my first Class")
        this.name=name;
        this.model=model
       // let isgod:boolean=true;
        //console.log("isgod is "+isgod)

    }
   
}

export class empolyee extends Cars{

   public FullName:string;
   public Age:number;

    constructor(FullName:string,Age:number){
        super("BMW",2019)
        this.FullName=FullName;
        this.Age=Age;
    }
}