var example ="";
var countArray = [];
var countObject = {};
var countLetters = function(example) {

 example = example.replace(/\s/g, '').split("");
 for (var i = 0; i < example.length; i++){
   if(countObject[example[i]]){
      countObject [example[i]].push(i);
   }else { 
     countObject [example[i]] = [i]
   }
 }
}
countLetters("lighthouse in the house");
console.log(countObject);
