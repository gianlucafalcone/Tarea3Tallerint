const transactionsController = require('../controllers/transactions.controller');


const _routes = [
   ["/transactions", transactionsController]
]

const routes = (app) => {
    _routes.forEach((route) => {
        const [url, controller] = route;
        app.use(url, controller)
    })
}


module.exports = routes;