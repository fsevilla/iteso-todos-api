const authMiddleware = (req, res, next) => {
    const token = req.query.token;

    if(token === '123') {
        next();
    } else {
        res.status(401).send('No te has logueado')
    }
}

module.exports = authMiddleware;