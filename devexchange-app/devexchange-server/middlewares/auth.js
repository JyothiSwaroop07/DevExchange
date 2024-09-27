import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(403).json({ message: "No token provided" });
        }

        const decodeData = jwt.verify(token, 'test');
        req.userId = decodeData?.id;

        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: "Unauthorized access" });
    }
}
