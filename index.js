"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
var statusCode;
(function (statusCode) {
    statusCode[statusCode["Success"] = 200] = "Success";
    statusCode[statusCode["ResourceCreated"] = 201] = "ResourceCreated";
    statusCode[statusCode["badRequest"] = 400] = "badRequest";
    statusCode[statusCode["unauthorized"] = 401] = "unauthorized";
})(statusCode || (statusCode = {}));
const port = 3000;
var user = [{
        id: 1,
        name: 'John',
        kidney: [{
                healthy: false
            },
            {
                healthy: true
            }]
    },
    {
        id: 2,
        name: 'Jane',
        kidney: [{
                healthy: true
            },
            {
                healthy: true
            }]
    },
    {
        id: 3,
        name: 'Jain',
        kidney: [{
                healthy: false
            },
            {
                healthy: false
            }]
    }];
let id;
app.get('/', (req, res) => {
    let strId = req.query.id;
    let userKidney;
    let foundKidney;
    if (typeof strId !== 'string') {
        res.status(statusCode.badRequest).json({ error: 'ID must be a string' });
        return;
    }
    id = parseInt(strId);
    if (isNaN(id)) {
        res.status(statusCode.badRequest).json({ error: 'ID must be a valid number' });
        return;
    }
    for (let i = 0; i < user.length; i++) {
        if (user[i].id == id) {
            userKidney = user[i].kidney;
            foundKidney = true;
            break;
        }
    }
    if (!foundKidney) {
        res.status(statusCode.unauthorized).json({ error: 'ID is not valid' });
        return;
    }
    res.status(statusCode.Success).json({
        userKidney: userKidney
    });
});
app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});
