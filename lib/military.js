//------------------------------------------------------
// SOLDIERS
//------------------------------------------------------
var soldierCount = 0;

function Soldier() {
  this.type = 'footSoldier';
  this.number = soldierCount++;
}

Soldier.prototype.battleCry = function(){
  return ("FREEDOM!");
  //FER HATES ALERT
}

//------------------------------------------------------
// GENERAL
//------------------------------------------------------
function General(name) {
  this.name = name;
  this.type = 'general';
}

General.prototype = new Soldier();

//------------------------------------------------------
// FOOTSOLDIERS
//------------------------------------------------------
function FootSoldier(name) {
  this.name = name;
}

FootSoldier.prototype = new Soldier();

module.exports = {
  Soldier:     Soldier,
  General:     General,
  FootSoldier: FootSoldier
}
