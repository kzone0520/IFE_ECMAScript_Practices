
// 全选checkbox的函数
var selectAll = function (elements){
    if(elements[elements.length -1].checked ){
        for(let i = 0; i < elements.length; i++){
            elements[i].checked = 'checked';
            elements[i].disabled = "";
        }
    }
}

// 单个勾选的函数
var selectOne = function (element){
    // 勾选个数
    let n = 0;
    for(let i = 0; i < element.length - 1; i++){
        if(element[i].checked){
            n++;
        }
    }
    // 只有一个被勾选时，不可取消
    if(n == 1){
        for(let i = 0; i < element.length - 1; i++){
            if(element[i].checked){
                element[i].disabled = true;
            }
        } 
    }
    // 当且只有两个被勾选时，全选状态被取消，并且去除其他disabled
    if(n == 2){
        element[3].checked = "";
        for(let i = 0; i < element.length - 1; i++){
            element[i].disabled = '';
        }
    }
    // 当全部单选被勾选时，全选被勾起
    if(n == 3){
        element[3].checked = "checked";
    }
}