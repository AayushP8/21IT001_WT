class Bike {
    constructor(type, avgspeed)
    { this.type = type; this.avgspeed = avgspeed;
    document.write(`<br> type :- ${type}<br> average:- ${avgspeed} in bike`);
    }
    displayBike(){
    document.write(`<br> inside bike class`);
    }
}
class Electric extends Bike { 
    constructor(price, model) { 
    super(price, model); 
    this.price = price; 
    this.model = model;
    document.write(`<br> price :- ${this.price}<br> model :- ${this.model} in Electric`);
    }
    displayEle(){
    document.write(`<br> Inside Electric class`);
    }
}
    let r = new Electric(150000,"20EC");
    r.displayEle(); r.displayBike();
    
