function Plane() {

}

Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
  this._location = airport;
};

Plane.prototype.takeoff = function (plane) {
  this._location.clearForTakeOff();
};
