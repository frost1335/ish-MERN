const fs = require('fs')
const path = require('path')

const filePath = path.join(require.main.filename)

module.exports = async (fileName) => {
    if (fileName) {
        await fs.unlink(filePath + '../client/public/img/' + fileName, (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
}