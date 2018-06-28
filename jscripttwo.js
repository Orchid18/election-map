var createPolitician = function(name,partyColor)
{
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.tallyVotes = function()
  {
    this.totalVotes = 0;
    for(var i = 0; i < this.electionResults.length; i++)
    {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
  politician.partyColor = partyColor;

  return politician;
};

var felix = createPolitician("Fixit Felix",[132,17,11]);
var ralph = createPolitician("Wreckit Ralph",[245,141,136]);

console.log("Our new candidate is " + felix.name + " and his party color is " + felix.partyColor + "!");
console.log("Our new candidate is " + ralph.name + " and his party color is " + ralph.partyColor + "!");

felix.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
ralph.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

felix.electionResults[9] = 1;
felix.electionResults[4] = 17;
felix.electionResults[43] = 11;

ralph.electionResults[9] = 28;
ralph.electionResults[4] = 38;
ralph.electionResults[43] = 27;

console.log(felix.electionResults);
console.log(ralph.electionResults);

var setStateResults = function(state)
{
  theStates[state].winner = null;

  if(felix.electionResults[state] > ralph.electionResults[state]){
    theStates[state].winner = felix;

  }else if(felix.electionResults[state] < ralph.electionResults[state]){
    theStates[state].winner = ralph;
  }
  var stateWinner = theStates[state].winner;

  if(stateWinner !== null){
    theStates[state].rgbColor = stateWinner.partyColor;

  }else{
    theStates[state].rgbColor = [11,32,57];
  }

  var stateInfoTable = document.getElementById("stateResults");

  var header = stateInfoTable.children[0].children[0];

  var stateName = header.children[0];

  stateName.innerText = theStates[state].nameFull;

  var stateAbbrev = header.children[1];

  stateAbbrev.innerText = theStates[state].nameAbbrev;

  var nameOneName = stateInfoTable.children[1].children[0].children[0];

  nameOneName.innerText = felix.name;

  var nameOneResults = stateInfoTable.children[1].children[0].children[1];

  nameOneResults.innerText = felix.electionResults[state];

  var nameTwoName = stateInfoTable.children[1].children[1].children[0];

  nameTwoName.innerText = ralph.name;

  var nameTwoResults = stateInfoTable.children[1].children[1].children[1];

  nameTwoResults.innerText = ralph.electionResults[state];

  var stateOverallWinner = stateInfoTable.children[1].children[2].children[1];

  stateOverallWinner.innerText = null;

  if(ralph.electionResults[state] !== felix.electionResults[state]){
  stateOverallWinner.innerText = stateWinner.name;
}else {
  stateOverallWinner.innerText = "DRAW"
}
};

var setOverallWinner = function()
{
  overallWinner = null;

  if(felix.totalVotes > ralph.totalVotes){
    overallWinner = felix.name;

  }else if
    (felix.totalVotes < ralph.totalVotes){
      overallWinner = ralph.name;

    }else{
      overallWinner = "a draw";
    }
 };

felix.tallyVotes();
ralph.tallyVotes();
setOverallWinner();

console.log("The vote total for Fixit Felix is " + felix.totalVotes + "!!!");
console.log("The vote total for Wreckit Ralph is " + ralph.totalVotes + "!!!");
console.log("The overall winner is " + overallWinner + "!!!  Hail Caesar!");

var countryInfoTable = document.getElementById("countryResults");

countryInfoTable.children[0].children[0].children[0].innerText = felix.name;
countryInfoTable.children[0].children[0].children[1].innerText = felix.totalVotes;
countryInfoTable.children[0].children[0].children[2].innerText = ralph.name;
countryInfoTable.children[0].children[0].children[3].innerText = ralph.totalVotes;
countryInfoTable.children[0].children[0].children[5].innerText = overallWinner;
