var tape=require("tape");
var isSorted =require("../");
var fixtures=require("./fixtures.json");
function descend(a,b){
    return b-a;
}
fixtures.forEach(f => {
    tape("sort test",function(t){
        t.plan(1);
        var expected=f.expected;
        var actual=isSorted(f.array,!!f.comparator?descend:null);
        t.equals(actual,expected,"expect "+expected+","+"but got "+actual);
    })
});
tape("test exceptions",function(t){
    t.plan(1);
    t.throws(function(){
        isSorted({a:1});
    },/Array expected, but got object/,"throw test pass");
})
