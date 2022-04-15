module.exports = interface = {
    response: String,
    data: {
        update: Array({
            name: String,
            version: {
                current: String,
                latest: String,
            }
        }),
        latest: Array({
            name: String,
            version: {
                current: String,
                latest: String,
            }
        }),
    },
};