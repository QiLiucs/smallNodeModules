//avoid using global variable
//ascending order
function defaultComparator(a,b){
    return a-b;
}
module.exports=function(arr,comparator){
    if(!Array.isArray(arr)) throw new TypeError(`Array expected, but got ${typeof arr}`);
    comparator=comparator||defaultComparator;
    for(var i=0;i<arr.length-1;i++){
        if(comparator(arr[i],arr[i+1])>0){
                return false;
        }
    }return true;
}