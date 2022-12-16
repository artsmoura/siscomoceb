import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const Auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
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

export default Auth;