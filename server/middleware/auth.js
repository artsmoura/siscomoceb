const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const Auth = (req, res, next) => {
    try {
        console.log(req.headers['authorization']);
        const authHeader = req.headers.authorization || req.headers.Authorization;
        // const token = req.headers.authorization.split(" ")[1];
        console.log(authHeader);
        if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
        const token = authHeader.split(' ')[1];

        const isOurToken = token.length < 500;

        let decodeData;

        if (token && isOurToken) {
            decodeData = jwt.verify(token, process.env.JWTPRIVATEKEY);

            req.userId = decodeData?.id;
        } else {
            decodeData = jwt.decode(token);
            req.userId = decodeData?.sub;
        }

        next();

    } catch (error) {
        console.log(error.message);
    }
};

module.exports = Auth;