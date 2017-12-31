//Core Variables
var totalScore = 1;
var gameScore = 1;
var clickMultiplier = 100;
var scorePerTick = 1;
var tickRate = 1000;

//Document destruction Solutions Variables
var numShredders = 0;
var numIndustrials = 0;
var numDumpsters = 0;
var numPaperPlants = 0;
var numRockets = 0;
var numPortals = 0;

//Document Destruction Upgrades
var tierShredders = 0;
var shredderEffcacy = 5;
var tierIndustrials = 0;
var industrialEffcacy = 10;
var tierDumpsterFires = 0;
var dumpsterEffcacy = 20;
var tierPaperPlants = 0;
var paperPlantEffcacy = 50;
var tierRockets = 0;
var rocketEffcacy = 200;
var tierPortals = 0;
var portalEffcacy = 1000;

//Economy
var shredderUpgradeInitial = 80;
var shredderUpgradeMultiplier = 1.25;
var industrialUpgradeInitial = 666.66;
var industrialUpgradeMultiplier = 1.5;
var dumpsterUpgradeInitial = 2500;
var dumpsterUpgradeMultiplier = 2;
var paperPlantUpgradeInitial = 25000;
var paperPlantUpgradeMultiplier = 3;
var rocketUpgradeInitial = 50000;
var rocketUpgradeMultiplier = 4;
var portalUpgradeInitial = 100000;
var portalUpgradeMultiplier = 5;




//clicker function
$("#clicker").click(function(){
    updateScore(clickMultiplier);
    $('#clickerIcon').attr('src','./assets/shredAnim.gif'); //piskel gif
});

//updates score based on multiplier fed from clicker or ticker
function updateScore(ickMultiplier){
  gameScore = gameScore + 1*ickMultiplier;
  //update the score balance
  totalScore = totalScore +1*ickMultiplier;
  //keep track of the total score for progression
  $('#scoreboard').html('Score: '+gameScore);
}

//the ticker
window.setInterval(function(){
  updateScore(scorePerTick);
},tickRate);

//Hoverover flavor text
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

//Document Destruction shredderSolutions
$("#shredderSM").click(function(){
  upgradeItem(shredderUpgradeInitial, shredderUpgradeMultiplier, numShredders, shredderEffcacy, $(numShreddersElement), $(shredderCostElement));
});

$("#shredderLG").click(function(){
  upgradeItem(industrialUpgradeInitial, industrialUpgradeMultiplier, numIndustrials, industrialEffcacy, numIndustrialsElement, industrialCostElement);
});
$("#dumpster").click(function(){
  upgradeItem(dumpsterUpgradeInitial, dumpsterUpgradeMultiplier, numDumpsters, dumpsterEffcacy, numDumpstersElement, dumpsterCostElement);
});

function upgradeItem(initial, multiplier, numItems,  effcacy, itemID, itemCostID){
  if (gameScore >= initial*multiplier){
    //subtract the score for upgrading
    gameScore = gameScore-(initial*multiplier).toFixed(0);

    //update the price to reflect next level
    (initial = initial*multiplier).toFixed(0);

    numItems++;
    //save a temporary new upgrade value
    var newUpgrade = numItems * effcacy;
    //add that to the scorePerTick
    scorePerTick = scorePerTick + newUpgrade;

    //calculate a new item cost
    var newCost = (initial*multiplier).toFixed(0);
    numItems++
    console.log('new score per tick: ' + scorePerTick);
    //update economy text
    $('#scoreboard').html('Score: '+gameScore);
    document.getElementById("itemID").+numItems;
    document.getElementById("itemCostID").(('-')+newCost);
  }
    numItems = numItems++;
};
