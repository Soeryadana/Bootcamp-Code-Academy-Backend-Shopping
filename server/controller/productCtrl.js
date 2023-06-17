const findAll = async (req, res) => {
    try {
        const product = await req.context.models.products.findAll();
        return res.send(product);
    } catch (error) {
        return res.send(error);
    }
};

const productsByCategory = async (req, res) => {
    try {
        const product = await req.context.models.products.findAll({
            where: { category_id: req.params.id }
        });
        return res.send(product);
    } catch (error) {
        return res.send(error);
    }
} 

const create = async (req, res) =>{
    try {
        const product = await req.context.models.products.create({
            product_name: req.body.product_name,
            description: req.body.description,
            category_id: req.body.category_id,
            price: req.body.price,
            qty: req.body.qty,
            image: req.file.filename,
        })

        res.send(product)
    } catch (error) {
        res.send(error)
    }
}

export default {
    findAll,
    productsByCategory,
    create
}