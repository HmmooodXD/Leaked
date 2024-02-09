function a1_0x52ad() {
    const _0x425443 = ["[36m❯ Error while connection to database... This IS NOT uLicense related error. Make sure you are using valid connection string and your MongoDB service is running. If you are using MongoDB Atlas make sure you have allowed your IP from network settings.\n", "3749200OCZVgH", "dotenv", "get", "1697334QCZpTu", "log", "NODE_ENV", "src/client/build", "express", "urlencoded", "./src/routes/apiRouter", "/api/client", "use", "6912522ietuLO", "[36m❯ Successfully connected to MongoDB\n", "./src/config/config", "cookie-parser", "version", "./src/utils/cronHandler", "❯ Server listening port ", "/api/users", "6eurYMe", "cors", "then", "./src/routes/devRouter", "sendFile", "config", "helmet", "435640NmICbt", "[36m❯ uLicense is ready to use!", "trust proxy", "join", "./src/utils/consoleLog", ", but something else is already listening it? Other website probably? This IS NOT uLicense related issue. You can change uLicense port or shut down the application listening port ", "listen", "mongoose", "258092CURhYI", "BASE_URL", "[36m❯ Detected Node.js version ", "/api/dev", "224696pbrwbf", "env", "production", "json", "./src/utils/firstStartup", "50qTteMz", "85108rynatT"];
    a1_0x52ad = function() {
        return _0x425443;
    };
    return a1_0x52ad();
}
const a1_0x468c6e = a1_0x7e87;
(function(_0x2a5e43, _0x4a86c3) {
    const _0xbead30 = a1_0x7e87,
        _0x3044c0 = _0x2a5e43();
    while (true) {
        try {
            const _0x1df8d5 = -parseInt(_0xbead30(267)) / 1 + -parseInt(_0xbead30(263)) / 2 * (-parseInt(_0xbead30(248)) / 3) + parseInt(_0xbead30(273)) / 4 * (-parseInt(_0xbead30(272)) / 5) + parseInt(_0xbead30(231)) / 6 + -parseInt(_0xbead30(275)) / 7 + parseInt(_0xbead30(255)) / 8 + parseInt(_0xbead30(240)) / 9;
            if (_0x1df8d5 === _0x4a86c3) break;
            else _0x3044c0.push(_0x3044c0.shift());
        } catch (_0x50bdb1) {
            _0x3044c0.push(_0x3044c0.shift());
        }
    }
}(a1_0x52ad, 390428));
const express = require(a1_0x468c6e(235));
require(a1_0x468c6e(229))[a1_0x468c6e(253)]();
const app = express(),
    mongoose = require(a1_0x468c6e(262)),
    helmet = require(a1_0x468c6e(254)),
    path = require("path"),
    cors = require(a1_0x468c6e(249)),
    cookieParser = require(a1_0x468c6e(243)),
    {
        PORT,
        MONGODB_URI
    } = require(a1_0x468c6e(242)),
    {
        consoleLog
    } = require(a1_0x468c6e(259)),
    {
        firstStartup
    } = require(a1_0x468c6e(271)),
    {
        cronHandler
    } = require(a1_0x468c6e(245));
app.use(express[a1_0x468c6e(236)]({
    extended: true
})), app[a1_0x468c6e(239)](express[a1_0x468c6e(270)]()), app[a1_0x468c6e(239)](helmet({
    contentSecurityPolicy: false
})), app[a1_0x468c6e(239)](cookieParser());
const corsOptionsProd = {
    origin: process[a1_0x468c6e(268)][a1_0x468c6e(264)],
    credentials: true,
    optionsSuccessStatus: 200
};
app[a1_0x468c6e(239)](cors(corsOptionsProd)), app.set(a1_0x468c6e(257), 1), app.use(a1_0x468c6e(247), require("./src/routes/userRouter")), app[a1_0x468c6e(239)](a1_0x468c6e(238), require(a1_0x468c6e(237))), app[a1_0x468c6e(239)](a1_0x468c6e(266), require(a1_0x468c6e(251)));

function a1_0x7e87(_0x2496ac, _0x4dd7d6) {
    const _0x52ad2b = a1_0x52ad();
    return a1_0x7e87 = function(_0x7e875f, _0x4f7544) {
        _0x7e875f = _0x7e875f - 229;
        let _0x4bab4e = _0x52ad2b[_0x7e875f];
        return _0x4bab4e;
    }, a1_0x7e87(_0x2496ac, _0x4dd7d6);
}
(!process.env[a1_0x468c6e(233)] || process.env[a1_0x468c6e(233)] === a1_0x468c6e(269)) && (app.use(express.static(path[a1_0x468c6e(258)](__dirname, a1_0x468c6e(234)))), app[a1_0x468c6e(230)]("*", (_0x21863d, _0x3d8565) => {
    const _0x5bafcf = a1_0x468c6e;
    _0x3d8565[_0x5bafcf(252)](path[_0x5bafcf(258)](__dirname, "src/client/build", "index.html"));
}));
consoleLog()[a1_0x468c6e(250)](async () => {
    const _0x3f1ba7 = a1_0x468c6e;
    console.log(_0x3f1ba7(265) + process[_0x3f1ba7(244)] + ".\n"), console[_0x3f1ba7(232)]("[36m❯ Connecting to MongoDB...");
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }), console[_0x3f1ba7(232)](_0x3f1ba7(241));
    } catch (_0x4e4527) {
        return console[_0x3f1ba7(232)](_0x3f1ba7(274)), console[_0x3f1ba7(232)](_0x4e4527);
    }
    await firstStartup(), cronHandler();
    try {
        app[_0x3f1ba7(261)](PORT, () => {
            const _0x18bdd5 = _0x3f1ba7;
            console[_0x18bdd5(232)](_0x18bdd5(246) + PORT), console[_0x18bdd5(232)](_0x18bdd5(256));
        });
    } catch (_0x5436b4) {
        return console[_0x3f1ba7(232)]("[36m❯ Tried to listen port " + PORT + _0x3f1ba7(260) + PORT + ".\n"), console[_0x3f1ba7(232)](_0x5436b4);
    }
});