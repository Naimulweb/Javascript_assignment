//feetToMile

function feetToMile(feet){
     var miles = feet / 5280;
     return miles;
 }
 var firstResult = feetToMile(1);
 console.log(firstResult);

 var secondResult = feetToMile(17);
 console.log(secondResult);

 var thirdResult = feetToMile(50);
 console.log(thirdResult);


// woodCalculator 

function woodCalculator(chair, table, bed){
    var chairWoodcount = chair * 1;
    var tableWoodcount = table * 3;
    var bedWoodcount = bed * 5;
    var totalWoodcount = chairWoodcount + tableWoodcount + bedWoodcount;
    return totalWoodcount;
}
var allwoodcount = woodCalculator(2, 3, 5);
console.log(allwoodcount);


// brickCalculator

function brickCalculator(level){
    height = 0;
    if(level > 20){
        height +=  ((level - 20)*10);
        level =  20;
    }   
    if(level > 10){
        height +=  ((level - 10)*12);
        level = 10;
    }
    height += (level * 15);
    var totalbrick = height * 1000;
    return totalbrick;
}
var totalbrick = brickCalculator(20);
console.log(totalbrick);

// tinyFriend 

function tinyFriend(name){
    var largest = name[0];
    for(var i = 0; i < name.length; i++){
        var currentName = name[i];
        if(currentName > largest){
            largest = currentName;
        }
    }
    return largest;
}
var largestName = tinyFriend(["Naim", "Fahim", "Hamim", "Bappi","Karimul"]);
console.log(largestName);