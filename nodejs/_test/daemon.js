var cp = require('child_process');

var worker;

function spawn(server, config) {

    worker = cp.spawn('node', [server, config], {
        stdio: [0, 1, 2, 'ipc']
    });

    worker.on('exit', function (code) {
        if (code !== 0) {
            spawn(server, config);
        }
    });

    //进程通信
    worker.send({ "worker": process.argv });

    worker.on('message', function (msg) {
        console.log(msg.server, "&&&&&&&&&&&&&&&&&&&&&&&&&");
    });
}

function main(argv) {
    spawn(argv[1], argv[0]);
    process.on('SIGTERM', function () {
        worker.kill();
        process.exit(0);
    });
}



main(process.argv.slice(2));