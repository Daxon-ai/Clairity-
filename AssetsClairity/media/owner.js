
const fs = require('fs')
// gausah di ubah rek karna
// udh ada request pas di scan pairing
global.ownername = "Lesta";
global.owner = "254706519089";
global.botname = "Daxon-Lesta";

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    delete require.cache[file]
    require(file)
})
