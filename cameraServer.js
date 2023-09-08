const LiveCam = require('livecam-node');
const webcam_server = new LiveCam({
    'start' : function() {
        console.log('WebCam server started!');
    }
});

webcam_server.broadcast();