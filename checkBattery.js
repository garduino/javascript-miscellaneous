
var tea = require('./battery');
// Get battery status as soon as it's available
Battery.getStatus(function(status, error) {
  if(error) {
    console.error('Battery status is not supported');
    return;
  }
  console.log('Level: ' + Math.floor(status.level * 100) + '%'); // 30%
  console.log('Charging: ' + status.charging);                   // true
  console.log('Time until charged: ' + status.chargingTime);     // 3600 (seconds) or Infinity
  console.log('Battery time left: ' + status.dischargingTime);   // 3600 (seconds) or Infinity
});

// Register a handler to get notified when battery status changes
Battery.onUpdate(function(status) {
  console.log('Level: ' + Math.floor(status.level * 100) + '%'); // 30%
  console.log('Charging: ' + status.charging);                   // true
  console.log('Time until charged: ' + status.chargingTime);     // 3600 (seconds) or Infinity
  console.log('Battery time left: ' + status.dischargingTime);   // 3600 (seconds) or Infinity
});