window.onload = function(){
    // code1 练习数字相关的一些操作：
    var code1 = document.getElementById('code1'),
    num_a = document.getElementById('radio-a'),
    num_b = document.getElementById('radio-b'),
    oInp1 = document.getElementById('num-a'),
    oInp2 = document.getElementById('num-b'),
    aBtn = code1.querySelectorAll('button'),
    p = code1.querySelector('p');

    aBtn[0].onclick = function(){
        if(num_a.checked){
            p.innerHTML = isNaN(Number(oInp1.value)) ? "Number A <strong>Not</strong> a number" : "Number A <strong>is</strong> a number";
        }
        else if(num_b.checked){
            p.innerHTML = isNaN(Number(oInp2.value)) ? "Number B <strong>Not</strong> a number" : "Number B <strong>is</strong> a number"; 
        }
        else{
            p.innerHTML = "请选择一个输入框";
        } 
        /*
        以下是三元运算符的方法，效果等同上面代码 
        p.innerHTML = (num_a.checked || num_b.checked) ? 
        (
            num_a.checked ? 
            (
                isNaN(Number(oInp1.value)) ? "Number A <strong>Not</strong> a number" : "Number A <strong>is</strong> a number"
            ) : 
            (
                isNaN(Number(oInp2.value)) ? "Number B <strong>Not</strong> a number" : "Number B <strong>is</strong> a number"
            ) 
        ) :
        "请选择一个输入框"; 
        */
    }

    aBtn[1].onclick = function(){
        p.innerHTML = ( isNaN(Number(oInp1.value)) || isNaN(Number(oInp2.value)) ) ?
        "其中有一个不是数字请修改" :
        ( (oInp2.value*1<=20 && oInp2.value*1 >= 0 )? Number(oInp1.value).toFixed( Number(oInp2.value) ): "小数位数超过20或者小于0，请修改" );
        
    }
    aBtn[2].onclick = function(){
        p.innerHTML = (num_a.checked || num_b.checked) ? 
        (
            num_a.checked ? 
            (
                isNaN(Number(oInp1.value)) ? "Number A <strong>Not</strong> a number" : Math.abs(oInp1.value)
            ) : 
            (
                isNaN(Number(oInp2.value)) ? "Number B <strong>Not</strong> a number" : Math.abs(oInp2.value)
            ) 
        ) :
        "请选择一个输入框";
    }
    aBtn[3].onclick = function(){
        p.innerHTML = (num_a.checked || num_b.checked) ? 
        (
            num_a.checked ? 
            (
                isNaN(Number(oInp1.value)) ? "Number A <strong>Not</strong> a number" : Math.ceil(oInp1.value)
            ) : 
            (
                isNaN(Number(oInp2.value)) ? "Number B <strong>Not</strong> a number" : Math.ceil(oInp2.value)
            ) 
        ) :
        "请选择一个输入框";
    }
    aBtn[4].onclick = function(){
        p.innerHTML = (num_a.checked || num_b.checked) ? 
        (
            num_a.checked ? 
            (
                isNaN(Number(oInp1.value)) ? "Number A <strong>Not</strong> a number" : Math.floor(oInp1.value)
            ) : 
            (
                isNaN(Number(oInp2.value)) ? "Number B <strong>Not</strong> a number" : Math.floor(oInp2.value)
            ) 
        ) :
        "请选择一个输入框";
    }
    aBtn[5].onclick = function(){
        p.innerHTML = (num_a.checked || num_b.checked) ? 
        (
            num_a.checked ? 
            (
                isNaN(Number(oInp1.value)) ? "Number A <strong>Not</strong> a number" : Math.round(oInp1.value)
            ) : 
            (
                isNaN(Number(oInp2.value)) ? "Number B <strong>Not</strong> a number" : Math.round(oInp2.value)
            ) 
        ) :
        "请选择一个输入框";

    }
    aBtn[6].onclick = function(){
        p.innerHTML = ( isNaN(Number(oInp1.value)) || isNaN(Number(oInp2.value)) ) ?
        "其中有一个不是数字请修改" :
        Math.max(oInp1.value, oInp2.value);
    }
    aBtn[7].onclick = function(){
        p.innerHTML = ( isNaN(Number(oInp1.value)) || isNaN(Number(oInp2.value)) ) ?
        "其中有一个不是数字请修改" :
        Math.min(oInp1.value, oInp2.value);
    }

    //code2 练习数字相关的一些操作：
    var code2 = document.getElementById('code2'),
    rdo1 = document.getElementById('radio-a-2'),
    rdo2 = document.getElementById('radio-b-2'),
    otxtarea1 = document.getElementById('str-a'),
    otxtarea2 = document.getElementById('str-b'),
    oInp3 = document.getElementById('num-a-2'),
    oInp4 = document.getElementById('num-b-2'),
    aBtn2 = code2.querySelectorAll('button'),
    p2 = code2.querySelector('p');

    //获取当前选中输入的内容长度
    aBtn2[0].onclick = function(){
        p2.innerHTML = rdo1.checked ? 
        ( otxtarea1.value ? otxtarea1.value.length : "请输入内容"  ) :
        ( otxtarea2.value ? otxtarea2.value.length : "请输入内容"  );
    }
    //当前选中输入中的第3个字符
    aBtn2[1].onclick = function(){
        p2.innerHTML = rdo1.checked ? 
        ( otxtarea1.value ? otxtarea1.value[2] : "请输入内容"  ) :
        ( otxtarea2.value ? otxtarea2.value[2] : "请输入内容"  );
    }
    //把两个输入框的文字连接在一起输出（concat)
    aBtn2[2].onclick = function(){
        p2.innerHTML = (otxtarea1.value || otxtarea2.value) ? 
        otxtarea1.value.concat(otxtarea2.value):
        "请输入内容";
    }
    //输入B中的内容，在输入A的内容中第一次出现的位置
    aBtn2[3].onclick = function(){
        p2.innerHTML = (otxtarea1.value && otxtarea2.value) ? 
        otxtarea1.value.indexOf(otxtarea2.value):
        "其中有一个未输入";
    }
    //输入B中的内容，在输入A的内容中第一次出现的位置
    aBtn2[4].onclick = function(){
        p2.innerHTML = (otxtarea1.value && otxtarea2.value) ? 
        otxtarea2.value.lastIndexOf(otxtarea1.value):
        "其中有一个未输入";
    }
    //使用slice获取选中输入框内容的部分内容，参数为num-a及num-b
    aBtn2[5].onclick = function(){
        p2.innerHTML = rdo1.checked ? 
        ( otxtarea1.value ? otxtarea1.value.slice(oInp3.value, oInp4.value) : "请输入内容"  ) :
        ( otxtarea2.value ? otxtarea2.value.slice(oInp3.value, oInp4.value) : "请输入内容"  );
    }
    //当前选中输入框的行数
    aBtn2[6].onclick = function(){
        p2.innerHTML = rdo1.checked ? 
        ( otxtarea1.value ? otxtarea1.value.split(/\n/).length : "请输入内容"  ) :
        ( otxtarea2.value ? otxtarea2.value.split(/\n/).length : "请输入内容"  );
    }
    //使用substr获取选中输入框内容的子字符串，参数为num-a及num-b
    aBtn2[7].onclick = function(){
        p2.innerHTML = rdo1.checked ? 
        ( otxtarea1.value ? otxtarea1.value.substr(oInp3.value, oInp4.value) : "请输入内容"  ) :
        ( otxtarea2.value ? otxtarea2.value.substr(oInp3.value, oInp4.value) : "请输入内容"  );
    }
    //把所选输入框中的内容全部转为大写
    aBtn2[8].onclick = function(){
        p2.innerHTML = rdo1.checked ? 
        ( otxtarea1.value ? otxtarea1.value.toUpperCase() : "请输入内容"  ) :
        ( otxtarea2.value ? otxtarea2.value.toUpperCase() : "请输入内容"  );
    }
    //把所选输入框中的内容全部转为小写
    aBtn2[9].onclick = function(){
        p2.innerHTML = rdo1.checked ? 
        ( otxtarea1.value ? otxtarea1.value.toLowerCase() : "请输入内容"  ) :
        ( otxtarea2.value ? otxtarea2.value.toLowerCase() : "请输入内容"  );
    }
    //把所选输入框中内容的半角空格全部去除
    aBtn2[10].onclick = function(){
        p2.innerHTML = rdo1.checked ? 
        ( otxtarea1.value ? otxtarea1.value.split(/\s+/).join('') : "请输入内容"  ) :
        ( otxtarea2.value ? otxtarea2.value.split(/\s+/).join('') : "请输入内容"  );
    }
    //把所选输入框中内容的a全部替换成另外一个输入框中的内容
    aBtn2[11].onclick = function(){
        p2.innerHTML = rdo1.checked ?
        ( otxtarea1.value ? otxtarea1.value.split('a').join(otxtarea2.value) : "请输入内容"  ) :
        ( otxtarea2.value ? otxtarea2.value.split('a').join(otxtarea1.value) : "请输入内容"  );
    }   

    // code3
    /*
    实现一个字符串头尾去除空格的函数
    注意需要去除的空格，包括全角、半角空格
    暂时不需要学习和使用正则表达式的方式
     */
    //以下方法只能去除普通空格。
    function diyTrim_1(str) {
        if(str[0] ==  " " || str[str.length-1] == " "){
            str = (str[0] ==  " ") ?
            str.slice(1, str.length) :
            str.slice(0, str.length-1);
            return diyTrim(str);
        }
        return str;
    }
   
    function diyTrim(str) {
        return str.trim();
    }
    
    // 测试用例
    console.log("去除空格:");
    console.log(diyTrim(' a f b    ')); // ->a f b
    console.log(diyTrim('    ffdaf    ')); // ->ffdaf
    console.log(diyTrim('1    ')); // ->1
    console.log(diyTrim('　　f')); // ->f
    console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
    console.log(diyTrim(' ')); // ->
    console.log(diyTrim('　')); // ->
    console.log(diyTrim('')); // ->

    /*
    去掉字符串str中，连续重复的地方
    */
    function removeRepetition(str) {
        var result = "";
        for(var i=0; i<str.length; i++){
            if(str[i] !== str[i+1]){
                result += str[i];
            }
        }
        return result;
    }

    // 测试用例
    console.log("去掉字符串str中，连续重复的地方:");
    console.log(removeRepetition("aaa")); // ->a
    console.log(removeRepetition("abbba")); // ->aba
    console.log(removeRepetition("aabbaabb")); // ->abab
    console.log(removeRepetition("")); // ->
    console.log(removeRepetition("abc")); // ->abc   
    
    // code4 练习如何使用数组来实现队列，综合考虑使用数组的 push，pop，shift，unshift操作
    var tree = {
        "id": 0,
        "name": "root",
        "left": {
            "id": 1,
            "name": "Simon",
            "left": {
                "id": 3,
                "name": "Carl",
                "left": {
                    "id": 7,
                    "name": "Lee",
                    "left": {
                        "id": 11,
                        "name": "Fate"
                    }
                },
                "right": {
                    "id": 8,
                    "name": "Annie",
                    "left": {
                        "id": 12,
                        "name": "Saber"
                    }
                }
            },
            "right": {
                "id": 4,
                "name": "Tony",
                "left": {
                    "id": 9,
                    "name": "Candy"
                }
            }
        },
        "right": {
            "id": 2,
            "name": "right",
            "left": {
                "id": 5,
                "name": "Carl",
            },
            "right": {
                "id": 6,
                "name": "Carl",
                "right": {
                    "id": 10,
                    "name": "Kai"
                }        
            }
        }
    }
    
    // 假设id和name均不会重复，根据输入name找到对应的id
    function findIdByName(x , y) {
        if(!y){
            return false;
        }
        if(y.name == x){
            return y.id;
        }
        if(findIdByName(x, y.left)){
            return findIdByName(x, y.left);
        }
        if(findIdByName(x, y.right)){
            return findIdByName(x, y.right);
        }
       
    }
    
    // 假设id和name均不会重复，根据输入id找到对应的name
    function findNameById(id) {
        function idToName(x, y){
            if(!y){
                return false;
            }
            if(y.id === x){
                return y.name;
            }
            return idToName(x, y.left) || idToName(x, y.right);
        }
        return idToName(id, tree);
    }
    
    // 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
    // 前序遍历: 根节点, 左子树, 右子树
    function getListWithDLR() {
        function dlr(obj){
            if(obj){
                console.log(obj.name);
                return dlr(obj.left) || dlr(obj.right);
            }
            return false;
        }
        dlr(tree);
    }
    console.log("前序遍历:");
    getListWithDLR();
    
    // 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
    // 中序遍历: 左子树, 根节点, 右子树
    function getListWithLDR() {
        function ldr(obj){
            if(!obj){
                return false;
            }
            ldr(obj.left);
            console.log(obj.name);
            ldr(obj.right);
            /*上面方法为以下方法的简写版 
            if(!obj){
                return false;
            }
            if(obj.left){
                console.log(obj.left.name);
                return ldr(obj.left);
            }
            console.log(obj.name);
            if(obj.right){
                console.log(obj.right.name);
                return ldr(obj.right);
            }
            */  
        }
        ldr(tree);
    }
    console.log("中序遍历:");
    getListWithLDR();

    // 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
    // 后序遍历: 左子树, 右子树, 根结点
    function getListWithLRD() {
        function lrd(obj){
            if(!obj){
                return false;
            }
            lrd(obj.left);
            lrd(obj.right); 
            console.log(obj.name);
        }
        lrd(tree);
    }
    console.log("后序遍历:");
    getListWithLRD();

    //code4 队头在右侧
    var code4 = document.getElementById('code4');
    var code4_p = code4.querySelector('p');
    var code4_btn = code4.querySelectorAll('button');
    var code4_inp = code4.querySelector('input');
    var queue = ['apple', 'pear'];
    //code4-2 队头在左侧
    var code4_2 = document.getElementById('code4-2');
    var code4_p_2 = code4_2.querySelector('p');
    var code4_btn_2 = code4_2.querySelectorAll('button');
    var code4_inp_2 = code4_2.querySelector('input');
    var queue_2 = ['apple', 'pear'];

    //入队
    code4_btn[0].onclick = function(){
        if(code4_inp.value){
            queue.push(code4_inp.value);
            code4_p.innerHTML ='队列内容：' + queue.join('-&gt');
        }
    }
    code4_btn_2[0].onclick = function(){
        if(code4_inp_2.value){
            queue_2.unshift(code4_inp_2.value);
            code4_p_2.innerHTML ='队列内容：' + queue_2.join('&lt;-');
        }
    }
    //出队
    code4_btn[1].onclick = function(){
        queue.shift();
        code4_p.innerHTML ='队列内容：' + queue.join('-&gt');
    }
    code4_btn_2[1].onclick = function(){
        queue_2.pop();
        code4_p_2.innerHTML ='队列内容：' + queue_2.join('&lt;-');
    }
    //打印队头元素内容
    code4_btn[2].onclick = function(){
       code4_p.innerHTML = '队头元素内容: ' + queue[queue.length-1];
    }
    code4_btn_2[2].onclick = function(){
        code4_p_2.innerHTML = '队头元素内容: ' + queue_2[0];
     }
    //判断队列是否为空
    code4_btn[3].onclick = function(){
        if(queue.length > 0){
            code4_p.innerHTML = '队列不为空: ' + queue.join('-&gt');
        }
        else{
            code4_p.innerHTML = '队列为空';
        }
    }
    code4_btn_2[3].onclick = function(){
        if(queue_2.length > 0){
            code4_p_2.innerHTML = '队列不为空: ' + queue_2.join('&lt;-');
        }
        else{
            code4_p_2.innerHTML = '队列为空';
        }
    }

    //code5 栈顶在右侧
    //练习如何使用数组来实现栈，综合考虑使用数组的 push，pop，shift，unshift操作 
    var code5 = document.getElementById('code5');
    var code5_p = code5.querySelector('p');
    var code5_btn = code5.querySelectorAll('button');
    var code5_inp = code5.querySelector('input');
    var stack = ['apple', 'pear'];
    // code5-2 栈顶在左侧
    var code5_2 = document.getElementById('code5-2');
    var code5_p_2 = code5_2.querySelector('p');
    var code5_btn_2 = code5_2.querySelectorAll('button');
    var code5_inp_2 = code5_2.querySelector('input');
    var stack_2 = ['apple', 'pear'];

    //进栈
    code5_btn[0].onclick = function (){
        if(code5_inp.value){
            stack.push(code5_inp.value);
            code5_p.innerHTML = '栈内容：' + stack.join('-&gt');
        }
    }
    code5_btn_2[0].onclick = function (){
        if(code5_inp_2.value){
            stack_2.unshift(code5_inp_2.value);
            code5_p_2.innerHTML = '栈内容：' + stack_2.join('&lt;-');
        }
    }
    //退栈
    code5_btn[1].onclick = function(){
        stack.pop();
        code5_p.innerHTML = '栈内容：' + stack.join('-&gt');        
    }
    code5_btn_2[1].onclick = function(){
        stack_2.shift();
        code5_p_2.innerHTML = '栈内容：' + stack_2.join('&lt;-');        
    }
    //打印栈顶元素内容
    code5_btn[2].onclick = function (){
        code5_p.innerHTML = '打印栈顶元素内容: ' + stack[stack.length-1];
    }
    code5_btn_2[2].onclick = function (){
        code5_p_2.innerHTML = '打印栈顶元素内容: ' + stack_2[0];
    }
    //判断栈是否为空
    code5_btn[3].onclick = function(){
        if(stack.length > 0){
            code5_p.innerHTML = '栈不为空: ' + stack.join('-&gt');
        }
        else{
            code5_p.innerHTML = '栈为空。';
        }
    }
    code5_btn_2[3].onclick = function(){
        if(stack_2.length > 0){
            code5_p_2.innerHTML = '栈不为空: ' + stack_2.join('&lt;-');
        }
        else{
            code5_p_2.innerHTML = '栈为空。';
        }
    }

    //code6 排序
    console.log("排序:");

    var arr = [43, 54, 4, -4, 84, 100, 58, 27, 140];
    //从大到小排序
    arr.sort(function(x, y){
        return y - x;
    })
    console.log(arr);
    //从小到大进排序
    var arr2 = [43, 54, 4, -4, 84, 100, 58, 27, 140];
    arr2.sort(function(x, y){
        return x - y;
    })
    console.log(arr2);
    //按字母顺序a-z排序
    var arr3 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
    console.log("按字母顺序a-z排序:");
    console.log(arr3.sort());
    //按字母顺序z-a排序
    var arr4 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
    console.log("按字母顺序z-a排序:");
    console.log(arr4.sort().reverse());
    //按照每个元素中第二个数从大到小的顺序进行排序
    var arr5 = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
    arr5.sort(function(x, y){
        return y[1] - x[1];
    })
    console.log("第二个数从大到小的顺序:");
    console.log(arr5);
    //将下面数组分别按元素对象的value值从小到大进行排序后输出
    var arr6 = [
        {
            id: 1,
            name: 'candy',
            value: 40
        }, {
            id: 2,
            name: 'Simon',
            value: 50
        }, {
            id: 3,
            name: 'Tony',
            value: 45
        }, {
            id: 4,
            name: 'Annie',
            value: 60
        }
    ];
    console.log("按元素对象的value值从小到大进行排序:");
    console.log(arr6.sort(function(x, y){
        return y.value - x.value
    }));

    //code7 学习通用的数据用不同的数据结构进行存储，以及相互的转换
    //对象转为数组：
    var scoreObject = {
        "Tony": {
            "Math": 95,
            "English": 79,
            "Music": 68
        }, 
        "Simon": {
            "Math": 100,
            "English": 95,
            "Music": 98
        }, 
        "Annie": {
            "Math": 54,
            "English": 65,
            "Music": 88
        }
    }
    function objToArr(obj){
        var arr1 = [];
        for(let item in obj){
            var arr2 = [];
            arr2.push(item);
            for(let key in obj[item]){
                arr2.push(obj[item][key]);
            }
            arr1.push(arr2);
        }
        return arr1;
    }
    console.log("对象转为数组：");
    console.log(objToArr(scoreObject));
    //数组转为对象：
    var menuArr = [
        //[key， key.name的值，父级key（如不存在则为-1）]
        [1, "Area1", -1],
        [2, "Area2", -1],
        [3, "Area1-1", 1],
        [4, "Area1-2", 1],
        [5, "Area2-1", 2],
        [6, "Area2-2", 2],
        [7, "Area1-2-3", 4],
        [8, "Area2-2-1", 6],
    ];

    function arrToObj(arr){
        var obj = {};
        // 创建子集的循环函数
        function makeObj(item){
            var objSelf = {};
            // 创建子对象变量便于理解，也可简化
            // var objChild = {}
            objSelf.name = item[1];
            // 判断是否有子集    
            for(let item2 of arr){
                if(item[0] == item2[2]){
                    // 判断subMenu属性是否存在：不存在则新建，存在则直接赋值（子集）
                    if(!objSelf.subMenu){
                        objSelf.subMenu = {};
                    }
                    // objChild = makeObj(item2);
                    // objSelf.subMenu[String(item2[0])] = objChild;
                    objSelf.subMenu[String(item2[0])] = makeObj(item2);
                }
            }
            return objSelf;
        }
        // 判断是否为根元素
        for(let value of arr){
            if(value[2] < 0){  
                obj[String(value[0])] = makeObj(value);  
            }
        }
        return obj;      
    }
    console.log("数组转为对象：");
    console.log(arrToObj(menuArr));

}


