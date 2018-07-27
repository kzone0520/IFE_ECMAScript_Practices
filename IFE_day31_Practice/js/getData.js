

// 获取数据函数
var getData = function ( productValue, regionValue){
    let td_list = [];
    // 循环原始数据以做判断
    for(let item of sourceData){
        // 循环条件一  （维度一）
        for(let i = 0; i < productValue.length; i++){
            // 循环条件二  （维度二）
            for(let j = 0; j < regionValue.length; j++){
                // 判断条件一二，获取数据（以数组形式传递）
                if(item.product === productValue[i] && item.region === regionValue[j]){
                    let x_list = [];
                    if(productValue.length > 1 && regionValue.length == 1){
                        x_list.push(item.region);
                        x_list.push(item.product);
                    }
                    else{
                        x_list.push(item.product);
                        x_list.push(item.region);
                    }
                    for(let saleValue of item.sale){
                        x_list.push(saleValue);
                    }
                    td_list.push(x_list);
                }
            }
        }
            
    }
    // 当数据的第一个与上一行或者往上第二行有重复的时候，删除这个数据。为合并第一列相同的数据腾地方。
    for(let i = 0; i < td_list.length; i++){
        if((i > 0 && td_list[i][0] == td_list[i-1][0]) ||(i > 1 && td_list[i][0] == td_list[i-2][0])){
            td_list[i].shift();
        }
    }
    return td_list;
}

