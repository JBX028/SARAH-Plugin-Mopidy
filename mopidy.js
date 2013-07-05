var exec = require('child_process').exec;

exports.action = function(data, callback, config) {

	var config = config.modules.mopidy;

	if (data.type == 'inc_vol') {var command = "volume +10";}
	if (data.type == 'dec_vol') {var command = "volume -10";}
	if (data.type == 'next')    {var command = "next";}
	if (data.type == 'pause')   {var command = "pause";}
    if (data.type == 'prev')    {var command = "prev";}
	if (data.type == 'play')    {var command = "play";}
	if (data.type == 'stop')    {var command = "stop";}
	
	var process = '%CD%/plugins/mopidy/bin/mpc -h ' + (config.host || 'musicbox') + ' -p ' + (config.port || '6600') + ' ' + command;
   	//var process = '%CD%/plugins/mopidy/bin/mpc -h musicbox -p 6600 ' + command;
	
	var child = exec(process, function (error, stdout, stderr) {
		console.log('error: ' + error); 
		console.log('stdout: ' + stdout); 	
		console.log('stderr: ' + stderr); 	
	});
	
	callback({});
	
}