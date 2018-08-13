            var aBtn = document.querySelectorAll("button");
            var p = document.querySelector("p");
            var myRes, w, k, gongbaojiding, yuxiangrousi,
                custome1, custome2;
            for (let i = 1; i< aBtn.length;i++){
                aBtn[i].disabled = true;
			}
			aBtn[0].style.background = 'yellow';
            var n = 0;
            function foo(){
				aBtn[n].disabled = true;
				aBtn[n].style.background = '';
                if( n < 6){
                    n = n+1;
					aBtn[n].disabled = false;
					aBtn[n].style.background = 'yellow';
                }
            }

            window.addEventListener('click', function(event){
                var event = event || window.event;
                var target = event.target || event.srcElement;
                
                if (target == aBtn[0]){
                    myRes = new Restaurant({
                        cash: 1000000,
                        seats: 20,
                        staff: []
                    });
                    p.innerHTML = "正在创建餐厅...";
                    setTimeout(function(){
                        p.innerHTML += "<br>餐厅创建完成=>  资金："+myRes.cash+"；桌位："+myRes.seats+"；员工："+myRes.staff.length+"；";
                    }, 300);
                    foo();    
                }
                if (target == aBtn[1]){
                    w = new Waiter('yq',5000);
                    k = new Cooker('kz', 8000);
                    myRes.hire(w, k);
                    setTimeout(function(){
                        p.innerHTML += "<br>招聘到服务员："+w.name+"；<br>招聘到厨师："+k.name+"；"
                    }, 300);
                    foo();     
                }
                if (target == aBtn[2]){
                    custome1 = new Customer();
                    custome2 = new Customer();
                    setTimeout(function(){
                        p.innerHTML += "<br>顾客1进入店铺；顾客2进入店铺；"
                    }, 300);
                    foo();      
                }
                if (target == aBtn[3]){
                    gongbaojiding = new Dishes("宫保鸡丁", 15, 30);
                    yuxiangrousi = new Dishes("鱼香肉丝", 10, 25);
                    custome1.order(gongbaojiding);
                    custome2.order(yuxiangrousi);
                    foo();
                }
                if (target == aBtn[4]){
                    w.log();
                    foo(); 
                }
                if (target == aBtn[5]){
                    setTimeout(function(){
                        k.work(gongbaojiding);
                        k.work(yuxiangrousi);
                    }, 500)
                    foo();
                }
                if (target == aBtn[6]){
                    w.shangcai(gongbaojiding, yuxiangrousi);
                    foo();
                }

            }, false);
