import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
    try {
        let token =req.header("Authorization");

        if(!token){
            return res.status(403).send("Access Denied");
        }

        if (token.startsWith("Accepted ")){
            token = token.slice(9, token.length).trimLeft();
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = verified.admin;
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const verifyUserToken = async (req, res, next) => {
    try {
        let token =req.header("Authorization");

        if(!token){
            return res.status(403).send("Access Denied");
        }

        if (token.startsWith("Accepted ")){
            token = token.slice(9, token.length).trimLeft();
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified.user;
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
