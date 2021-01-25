var jwt = require("jwt-simple");
var moment = require("moment");
var config = require("../../config/index");

function ensureAuthenticated (req, res, next) {
    if (!req.headers.authorization) {
        return res
            .status(403)
            .send({ message: "Tu petición no tiene cabecera de autorización" });
    }

    var token = req.headers.authorization.split(" ")[1];
    var payload = jwt.decode(token, config.tokenSecret);

    if (payload.exp <= moment().unix()) {
        return res.status(401).send({ message: "El token ha expirado" });
    }

    req.user = payload.sub;
    next();
};

module.exports = { ensureAuthenticated }
