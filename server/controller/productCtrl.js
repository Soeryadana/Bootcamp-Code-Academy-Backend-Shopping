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

export default {
    findAll,
    productsByCategory
}