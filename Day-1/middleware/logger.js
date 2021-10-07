const { ViewModuleSharp } = require("@material-ui/icons");
const moment = require("moment");
//Middleware
//// Creating middleWare
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}

module.exports = logger;