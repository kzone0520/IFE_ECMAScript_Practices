var btn = document.getElementsByTagName("button")[0];
var p = document.querySelector("p");
p.innerHTML = '';

// 餐厅类
// 重写类，让类只能生成一个实例。
var restaurantSingleton = (function(){
    var instance = null;
    function Restaurant(args){
        var args = args || {};
        this.cash = args.cash || 1000000;
        this.seats = args.seats || 1;
        this.staff = args.staff || [];
    }
    Restaurant.prototype = {
        constructor: Restaurant,
        hire: function(worker){
            this.staff.push(worker.name);
        },
        fire: function(worker){
            if (this.staff.indexOf(worker) !== -1){
                this.staff.splice(this.staff.indexOf(worker), 1);
            }
        }
    }
    return {
        name: "Restaurant",
        getInstance: function(args){
            if(instance === null){
                instance = new Restaurant(args);
            }
            return instance;
        }
    }
})();

// 职员类
// 用闭包将id变量私有化
var Staff = (function(){
    var id = 1;
    return function (name, wage){
        this.id = id;
        id += 1;
        this.name = name;
        this.wage = wage;
    }
})();
Staff.prototype.work = function(){
    console.log("do something");
}
// 为此构造函数添加一个方法使得无论调用这个方法几次都只能创建一个实例
Staff.getInstance = (function(){
    var instance = null;
    return function(){
        if (instance === null){
            instance = new Staff(arguments);
        }
        return instance;
    }
})();

// 服务员类
function Waiter(name, wage){
    Staff.call(this, name, wage);
}
Waiter.prototype = Object.create(Staff.prototype);
Waiter.prototype.constructor = Waiter;
Waiter.prototype.getOrder= function(customer){
    // 调用顾客点菜的方法
    var food = customer.order();
    p.innerHTML += "<br>服务员正在记录顾客点的菜=>"+food.name;
    console.log("服务员正在记录顾客点的菜=>"+food.name);
    return food;
}
Waiter.prototype.shangcai = function(food){
        p.innerHTML += "<br>服务员正在为顾客上菜=>"+food.name;
        console.log("服务员正在为顾客上菜=>"+food.name);
}
// 为此构造函数添加一个方法使得无论调用这个方法几次都只能创建一个实例
Waiter.getInstance = (function(){
    var instance = null;
    return function(name, wage){
        if (instance === null){
            instance = new Waiter(name, wage);
        }
        return instance;
    }
})();

// 厨师类
function Cooker(name, wage){
    Staff.call(this, name, wage);
}
Cooker.prototype = Object.create(Staff.prototype);
Cooker.prototype.constructor = Cooker;
Cooker.prototype.work = function(food){
    p.innerHTML += "<br>厨师正在烹饪出菜品=>:"+food.name;
    console.log("厨师正在烹饪出菜品=>:"+food.name);
}
// 为此构造函数添加一个方法使得无论调用这个方法几次都只能创建一个实例
Cooker.getInstance = (function(){
    var instance = null;
    return function(name, wage){
        if (instance === null){
            instance = new Cooker(name, wage);
        }
        return instance;
    }
})();

// 顾客类
function Customer(name){
    this.name = name;
    p.innerHTML += "顾客"+this.name+"进入餐厅";
    console.log("顾客"+this.name+"进入餐厅");
}
Customer.prototype = {
    constructor : Customer,
    // 随机点菜方法
    order : function(){
        let i  = Math.floor(Math.random()*4);
        var food = menu[i];
        p.innerHTML += "<br>顾客点菜=>:"+food.name;
        console.log("顾客点菜=>:"+food.name);
        return food;
    },
    eat : function(food){
        p.innerHTML += "<br>顾客用餐=>:"+food.name;
        p.innerHTML += "<br>顾客"+this.name+"用餐完毕已滚出餐厅";
        p.innerHTML += "<br><br>---------------------我是分割线---------------------<br><br>";
        console.log("顾客用餐=>:"+food.name);
        console.log("顾客"+this.name+"用餐完毕已滚出餐厅");
        console.log("---------------------我是分割线---------------------");
    }
}

// 菜品类
function Food(name, cost, price){
    this.name = name;
    this.cost = cost;
    this.price = price;
}
// 菜单
var menu = [{
    name : "红烧茄子",
    price : 30
}, {
    name :"鱼香肉丝",
    price : 35
}, {
    name : "宫保鸡丁",
    price : 40
}, {
    name : "醋溜白菜",
    price : 25
}];
// 顾客队列
var customers = ["Joy", "Panny", "Marry"];

// 餐厅运行
btn.onclick = (function(){
    var myRest = null;
    return function(){
        if(myRest === null){
            myRest = restaurantSingleton.getInstance({cash: 1000000,
                seats: 1,
                staff: []});
            var w = Waiter.getInstance('wyq', '6000');
            var k = Cooker.getInstance('zkz', '8000');
            myRest.hire(w);
            myRest.hire(k);
            console.log(myRest);
            for (let customer of customers){
                var Xman = new Customer(customer);
                var food =  w.getOrder(Xman);
                k.work(food);
                w.shangcai(food);
                Xman.eat(food);
            }
        }
    }
})();

