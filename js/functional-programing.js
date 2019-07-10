
function mapForEach(array,fn){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        newArray.push(
            fn(array[i])
        );
    } 
    return newArray;
}

var arr1 = [1, 2, 3];
console.log(arr1);      // [1, 2, 3]

var arr2 = mapForEach(arr1,function(item){
    return item * 2;
});
console.log(arr2);      // [2, 4, 9]

var arr3 = mapForEach(arr1,function(item){
    return item > 2;
});
console.log(arr3);      // [false, false, true]

var checkPastLimit = function(limit,item){
    return item  >  limit;
}

//arr3 arr4 結果一樣，但把function抽出來重複運用
var arr4 = mapForEach(arr1, checkPastLimit.bind(this,2));
console.log(arr4);      // [false, false, true]
console.log(
    mapForEach(arr1, checkPastLimit.bind(this,1))
);                       // [false, true, true]

//簡化 checkPastLimit.bind(this,1) =>  checkPastLimitSimplified(1)
var checkPastLimitSimplified = function(limit){
    return function(limit,item){
        return item  >  limit;
    }.bind(this,limit)
}
var arr5 =  mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);