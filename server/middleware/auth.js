import jwt from 'jsonwebtoken';

const Auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isOurToken = token.length < 500;

        let decodeData;

        if (token && isOurToken) {
            decodeData = jwt.verify(token, 'AQUI TEM QUE IR A PALAVRA DO TOKEN');

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

export default Auth;