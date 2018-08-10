
// 获取数据函数
var getData = function ( productValue, regionValue){
    // 优先获取 localStorage 里的数据，如果有则用此数据替换掉原始数据
    if(localStorage.getItem('data_list')){
        var stroage = JSON.parse(localStorage.getItem('data_list'));
        for(let item of sourceData){
            for(let x  of stroage ){
                if(item.product == x.product && item.region == x.region){
                    sourceData[sourceData.indexOf(item)].sale = x.sale;
                }
            }
        }
    }
    let td_list = [];
    // 循环原始数据以做判断
    for(let item of sourceData){
        // 循环条件一  （维度一）
        for(let i = 0; i < productValue.length; i++){
            // 循环条件二  （维度二）
            for(let j = 0; j < regionValue.length; j++){
                // 判断条件一二，获取数据（以数组形式传递）
                if(JSON.stringify(item).indexOf(productValue[i]) !== -1 && JSON.stringify(item).indexOf(regionValue[j]) !== -1){
                    let x_list = [];
                    x_list.push(item.product);
                    x_list.push(item.region);
                    for(let saleValue of item.sale){
                        x_list.push(saleValue);
                    }
                    td_list.push(x_list);
                }
            }
        }
            
    }
    return td_list;
   // console.log(td_list);
}
