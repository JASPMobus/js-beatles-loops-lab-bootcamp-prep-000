// add solution here

function theBeatlesPlay(musicians, instruments) {
  var retArray = [];
  
  for(let i = 0; i<4; i++) {
    retArray.push(musicians[i] + " plays " + instruments[i])
  }
  
  return retArray
}

function johnLennonFacts(facts) {
  var retArray = [];
  
  for(let i = 0; i<facts.length-1;i++) {
    retArray.push(facts[i]+"!!!")
  }
  
  return retArray
}