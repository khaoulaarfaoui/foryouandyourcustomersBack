const mongoose = require("mongoose");
module.exports = app => {
    const conn_str = `mongodb+srv://admin:admin@cluster0.txtcl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    mongoose.connect(conn_str, {useNewUrlParser: true, useUnifiedTopology: true}).then(res => console.log("conneceted")).catch(err => console.log(err));
    if (app) {
        app.set("mongoose", mongoose);
    }
};
