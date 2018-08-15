
function Restaurant(x){
    this.cash = x.cash;
    this.seats = x.seats;
    this.staff = x.staff;
}
Restaurant.prototype.hire = function(worker){
    this.staff.push(worker.name);
}
Restaurant.prototype.fire = function(worker){
    this.staff.splice(this.staff.indexOf(worker), 1);
}

function Dishes(name, cost, price){
    this.name = name;
    this.cost = cost;
    this.price = price;
}

Staff.prototype.work = function(){
    // do something
}

function Waiter(name, wage){
    Staff.call(this, name, wage);
}
Waiter.prototype = Object.create(Staff.prototype);
Waiter.prototype.constructor = Waiter;
Waiter.prototype.log = function(){
    p.innerHTML += "<br>服务员正在记录顾客点的菜...";
    
}
Waiter.prototype.shangcai = function(cai){
    for (let i = 0; i < arguments.length; i++){
        p.innerHTML += "<br>服务员正在为顾客上菜=>"+arguments[i].name;
    }
}

function Cooker(name, wage){
    Staff.call(this, name, wage);
}
Cooker.prototype = Object.create(Staff.prototype);
Cooker.prototype.constructor = Cooker;
Cooker.prototype.work = function(cai){
    p.innerHTML += "<br>厨师正在烹饪出菜品=>:"+cai.name;
}

var id = 1;
function Staff(name, wage){
    this.id = id;
    id += 1;
    this.name = name;
    this.wage = wage;
}

function Customer(){
    this.order = function(cai){
        p.innerHTML += "<br>顾客点菜=>:"+cai.name;
    }
}








