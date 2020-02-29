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

//this class you can not creat inestance from it, so you can not creat object from class abstract
// this type of class you can use to create a security classes 
abstract class Creadit{

private CreditID:number;
private CreditPass:number;

constructor(CreditID:number,CreditPass:number){
    this.CreditID=CreditID;
    this.CreditPass=CreditPass;

}

// this public function to acces by it to the veriable of this abstract calss

public GetCreaditID(){
    console.log("the CreditID is : "+this.CreditID);
}

public GetCreditPass() : number{
    return this.CreditPass;
}

}

export class empolyee extends Creadit{

   public FullName:string;
   public Age:number;

    constructor(FullName:string,Age:number){
        super(1036,123456)
        this.FullName=FullName;
        this.Age=Age;
    }
}