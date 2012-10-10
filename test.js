var child_process = require('child_process');

child_process.exec(
    'git clone git@github.com:rngadam/lophilojs.git /root/lophilo/lmc/users/rngadam/lophilojs.git', 
    {
	env: {
		GIT_SSH: '/root/lophilo/lmc/users/rngadam/ssh'
	}
    },
    function (error, stdout, stderr) {    
	    console.log('stdout: ' + stdout);
	    console.log('stderr: ' + stderr);
	    if (error !== null) {
	      console.log('exec error: ' + error);
	     console.log(error);
	    }

	    console.log('success');
  });
