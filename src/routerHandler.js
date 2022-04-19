const productRoutes = require("./app/routes/produitRoutes")
const cartRoutes = require('./app/routes/Cartroutes')

module.exports = app => {
    app.use("/product", productRoutes);
    app.use("/cart", cartRoutes);

}