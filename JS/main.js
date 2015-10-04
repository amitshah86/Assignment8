(function () {


items.forEach( function (item) {
console.log(item.price);

var prices = items.map ( function (item) {
  return item.price;

});
console.log(prices);

var sum = prices.reduce( function (prev, next) {
  return prev + next

});
console.log(sum);

var avg = sum / items.length;
console.log(avg);

Convert it to 2 decimal places
var converted = avg.toFixed(2);
console.log(converted);

Make it a String
var str = 'The average price is $' + converted;
console.log(str);

Make it show up on the page
var answer1 = document.querySelector('#answer1');
var textNode = document.createTextNode(str);

answer1.appendChild(textNode);


 }());


// Question #2


(function () {

var itemTitle = [];

var merchandise = items.filter( function (beers) {
  if (beers.price > 14 && beers.price < 18){
    itemTitle.push(beers.title);
  };  
  
  console.log(itemTitle);

var answer2 = document.querySelector('#answer2');
var itemTitle = document.write(str);
  });





// Question #3


var britishthings = items.filter (function (item) {
  return item.currency_code === "GBP";

});

console.log(britishitems);

var answer3 = document.querySelector('#answer3');


britishthings.forEach (function (item) {
  console.log(item.title);

  var str = item.title + ' costs \u00A318';
  console.log(str);

  var textNode = document.createTextNode(str);

  answer3.appendChild(textNode);
});


// Question #4


var woodenItems = items.filter (function(item) {
    return item.materials.indexOf('wood' || 'wooden') !== -1;

});

 console.log(woodenItems);


var answer4= document.querySelector('#answer4');


woodenItems.forEach (function (item) {
  console.log(item.title);

var str = item.title + ' is a wooden item.'
  
var textNode = document.createTextNode(str);

answer4.appendChild(textNode);

var lineBreak = document.createElement('br');

answer4.appendChild(lineBreak);
});


// Question #5

var manyMaterials = items.filter(function (obj) {
    if (obj.materials.length > 8) {
      return true
    };  
});
    manyMaterials.forEach(function (obj) {
      addParagraph('#answer5', obj.title + ' has' + obj.materials.length + ' materials:');
      addList('#answer5', obj.materials);
    });  


//Question #6


(function () {

var madebySeller = items.filter( function (items) {
  if (items.who_made === "i_did") {
    return items;
  }
}); 

var result = madebySeller.length + " were made by the sellers";


var answer6 = document.querySelector('#answer6');


var textNode = document.createTextNode(result);
answer6.appendChild(textNode);

}());
