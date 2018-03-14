//Core Variables
var totalScore = 1;
var gameScore = 1;
var clickMultiplier = 1;
var scorePerTick = 1;
var tickRate = 1000;

//Document destruction Solutions Variables
var numShredders = 0;
var numIndustrials = 0;
var numDumpsterFires = 0;
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
var dumpsterFireUpgradeInitial = 2500;
var dumpsterFireUpgradeMultiplier = 2;
var paperPlantUpgradeInitial = 8333.33;
var paperPlantUpgradeMultiplier = 3;
var rocketUpgradeInitial = 12500;
var rocketUpgradeMultiplier = 4;
var portalUpgradeInitial = 20000;
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
  if (gameScore >= shredderUpgradeInitial*shredderUpgradeMultiplier){
    //subtract the score for upgrading
    gameScore = gameScore-(shredderUpgradeInitial*shredderUpgradeMultiplier).toFixed(0);

    //update the price to reflect next level
    (shredderUpgradeInitial = shredderUpgradeInitial*shredderUpgradeMultiplier).toFixed(0);

    numShredders++;
    //save a temporary new upgrade value
    var newUpgrade = numShredders * shredderEffcacy;
    //add that to the scorePerTick
    scorePerTick = scorePerTick + newUpgrade;

    //calculate a new shredder cost
    var newShredderCost = (shredderUpgradeInitial*shredderUpgradeMultiplier).toFixed(0);

    console.log('new score per tick: ' + scorePerTick);
    $('#scoreboard').html('Score: '+gameScore);
    $('#numShreddersElement').html(numShredders);
    $('#shredderCostElement').html("-" + newShredderCost);
  }
    numShredders = numShredders++;
});

$("#shredderLG").click(function(){
  if (gameScore >= industrialUpgradeInitial*industrialUpgradeMultiplier){
    //subtract the score for upgrading
    gameScore = gameScore-(industrialUpgradeInitial*industrialUpgradeMultiplier).toFixed(0);

    //update the price to reflect next level
    (industrialUpgradeInitial = industrialUpgradeInitial*industrialUpgradeMultiplier).toFixed(0);

    numIndustrials++;
    //save a temporary new upgrade value
    var newUpgrade = numIndustrials * industrialEffcacy;
    //add that to the scorePerTick
    scorePerTick = scorePerTick + newUpgrade;

    //calculate a new industrial cost
    var newIndustrialCost = (industrialUpgradeInitial*industrialUpgradeMultiplier).toFixed(0);

    console.log('new score per tick: ' + scorePerTick);
    //update economy text
    $('#scoreboard').html('Score: '+gameScore);
    $('#numIndustrialsElement').html(numIndustrials);
    $('#industrialCostElement').html("-" + newIndustrialCost);
  }
    numIndustrials = numIndustrials++;
});


$("#dumpster").click(function(){
    console.log('clicked');
  if (gameScore >= dumpsterFireUpgradeInitial*dumpsterFireUpgradeMultiplier){
    //subtract the score for upgrading
    gameScore = gameScore-(dumpsterFireUpgradeInitial*dumpsterFireUpgradeMultiplier).toFixed(0);

    //update the price to reflect next level
    (dumpsterFireUpgradeInitial = dumpsterFireUpgradeInitial*dumpsterFireUpgradeMultiplier).toFixed(0);

    numDumpsterFires++;
    console.log(numDumpsterFires);
    //save a temporary new upgrade value
    var newUpgrade = numDumpsterFires * dumpsterEffcacy;
    //add that to the scorePerTick
    scorePerTick = scorePerTick + newUpgrade;

    //calculate a new industrial cost
    var newDumpsterCost = (dumpsterFireUpgradeInitial*dumpsterFireUpgradeMultiplier).toFixed(0);
    console.log(newDumpsterCost);
    console.log('new score per tick: ' + scorePerTick);
    //update economy text
    $('#scoreboard').html('Score: '+gameScore);
    $('#numDumpstersElement').html(numDumpsterFires);
    console.log('num element updated');
    $('#dumpsterCostElement').html("-"+newDumpsterCost);
    console.log('cost element updated');
  }
    numDumpsterFires = numDumpsterFires++;
});

$("#paperPlant").click(function () {
    console.log('clicked');
    if (gameScore >= paperPlantUpgradeInitial * paperPlantUpgradeMultiplier) {
        //subtract the score for upgrading
        gameScore = gameScore - (paperPlantUpgradeInitial * paperPlantUpgradeMultiplier).toFixed(0);

        //update the price to reflect next level
        (paperPlantUpgradeInitial = paperPlantUpgradeInitial * paperPlantUpgradeMultiplier).toFixed(0);

        numPaperPlants++;
        console.log(numPaperPlants);
        //save a temporary new upgrade value
        var newUpgrade = numPaperPlants * paperPlantEffcacy;
        //add that to the scorePerTick
        scorePerTick = scorePerTick + newUpgrade;

        //calculate a new industrial cost
        var newPaperPlantCost = (paperPlantUpgradeInitial * paperPlantUpgradeMultiplier).toFixed(0);
        console.log(newPaperPlantCost);
        console.log('new score per tick: ' + scorePerTick);
        //update economy text
        $('#scoreboard').html('Score: ' + gameScore);
        $('#numPaperElement').html(numPaperPlants);
        console.log('num element updated');
        $('#paperCostElement').html("-" + newPaperPlantCost);
        console.log('cost element updated');
    }
    numPaperPlants = numPaperPlants++;
});

$("#rocket").click(function () {
    console.log('clicked');
    if (gameScore >= rocketUpgradeInitial * rocketUpgradeMultiplier) {
        //subtract the score for upgrading
        gameScore = gameScore - (rocketUpgradeInitial * rocketUpgradeMultiplier).toFixed(0);

        //update the price to reflect next level
        (rocketUpgradeInitial = rocketUpgradeInitial * rocketUpgradeMultiplier).toFixed(0);

        numRockets++;
        console.log(numRockets);
        //save a temporary new upgrade value
        var newUpgrade = numRockets * rocketEffcacy;
        //add that to the scorePerTick
        scorePerTick = scorePerTick + newUpgrade;

        //calculate a new industrial cost
        var newRocketCost = (rocketUpgradeInitial * rocketUpgradeMultiplier).toFixed(0);
        console.log(newRocketCost);
        console.log('new score per tick: ' + scorePerTick);
        //update economy text
        $('#scoreboard').html('Score: ' + gameScore);
        $('#numRocketsElement').html(numRockets);
        console.log('num element updated');
        $('#rocketCostElement').html("-" + newRocketCost);
        console.log('cost element updated');
    }
    numRockets = numRockets++;
});

$("#portal").click(function () {
    console.log('clicked');
    if (gameScore >= portalUpgradeInitial * portalUpgradeMultiplier) {
        //subtract the score for upgrading
        gameScore = gameScore - (portalUpgradeInitial * portalUpgradeMultiplier).toFixed(0);

        //update the price to reflect next level
        (portalUpgradeInitial = portalUpgradeInitial * portalUpgradeMultiplier).toFixed(0);

        numPortals++;
        console.log(numPortals);
        //save a temporary new upgrade value
        var newUpgrade = numPortals * portalEffcacy;
        //add that to the scorePerTick
        scorePerTick = scorePerTick + newUpgrade;
        console.log('ticked updated');
        //calculate a new industrial cost
        var newPortalCost = (portalUpgradeInitial * portalUpgradeMultiplier).toFixed(0);
        console.log(newPortalCost);
        console.log('new score per tick: ' + scorePerTick);
        
        //update economy text
        $('#scoreboard').html('Score: ' + gameScore);
        $('#numPortalElement').html(numPortals);
        console.log('num element updated');
        $('#portalCostElement').html("-" + newPortalCost);
        console.log('cost element updated');
    }
    numPortals = numPortals++;
});