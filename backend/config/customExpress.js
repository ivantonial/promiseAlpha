const express = require("express");
const delayrequestError = require("../routes/delayrequestError");
const delayrequest = require("../routes/delayrequest");


const cors = require("cors");

module.exports = () => {
    const app = express();
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    
    delayrequest(app);
    delayrequestError(app);


    return app;
}