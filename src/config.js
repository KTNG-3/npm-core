(async () => {
    var process = require('process')
    const fs = require('fs');
    const ing3kth_init = require('./command/data/init');

    ing3kth_init.execute(false);

    module.exports = require(process.cwd() + '/ing3kth-config.json');
})();