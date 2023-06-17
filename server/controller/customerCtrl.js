const create = async (req, res) => {
  try {
    const customer = await req.context.models.customers.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      user_id: req.user.user_id,
      createdAt: Date.now(),
    });
    return res.send(customer)
  } catch (error) {
    return res.send(error);
  }
};

const findAll = async (req, res) => {
    try {
        const customer = await req.context.models.customers.findAll({});
        return res.send(customer);
    } catch (error) {
        return res.send(error);
    }
}

const customerWithUsers = async (req, res) => {
    try {
        const customer = await req.context.models.customers.findAll({
            include: [{
                model: req.context.models.users,
                attributes: ['username', 'user_password'],
                as: "user"
            }]
        });
        return res.send(customer);
    } catch (error) {
        return res.send(error);
    }
}

const customerWithOrderDetail = async (req, res) => {
    try {
        const customer = await req.context.models.customers.findAll({
            // include: { all: true }

            include: [{
                model: req.context.models.users,
                as: "user",
                include: [{
                    model: req.context.models.orders,
                    as: "orders",
                    include: [{
                        model: req.context.models.order_detail,
                        as: "order_details"
                    }]
                }]
            }]
        });

        return res.send(customer);
    } catch (error) {
        return res.send(error);
    }
}

export default {
  create,
  findAll,
  customerWithOrderDetail,
  customerWithUsers
};
