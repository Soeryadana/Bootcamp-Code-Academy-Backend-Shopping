import jwt_decode from "jwt-decode";

const create = async (req, res, next) => {
    try {
        let bearer = req.headers.authorization;
        bearer = bearer.split(" ");
        const token = bearer[1];
        const decoded = jwt_decode(token);

        const order = await req.context.models.orders.create({
            user_id: decoded.user_id
        });
        req.order = order;
        next();    
    } catch (error) {
        res.send(error)
    }
    
}

// const updateAfterInsert = async (req, res) => {
//     try {
//         await req.context.models.orders.update({
//             totalproduct: 
//         })
//     } catch (error) {
        
//     }
// }

export default {
    create
}