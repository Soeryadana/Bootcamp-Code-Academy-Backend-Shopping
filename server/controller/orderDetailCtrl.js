import { response } from "express";
import rensponseHelper from "../helpers/responseHelper";

const create = async (req, res) => {
  try {
    console.log(req.order.order_id);
    const orderDetail = await req.body;
    console.log(orderDetail);
    const numberOfEntries = orderDetail.length;

    let totalPrice = 0;

    let arrayProduct = [];

    for (let i = 0; i < numberOfEntries; i++) {
      arrayProduct.push({
        order_id: req.order.order_id,
        product_id: orderDetail[i].product_id,
        qty: orderDetail[i].qty,
      });

      await req.context.models.order_detail.create({
        order_id: req.order.order_id,
        product_id: orderDetail[i].product_id,
        qty: orderDetail[i].qty,
      });

      let product = await req.context.models.products.findOne({
        where: { product_id: orderDetail[i].product_id },
      });

      let subTotal = orderDetail[i].qty * product.price;
      totalPrice += subTotal;

      await req.context.models.products.update(
        {
          qty: product.qty - orderDetail[i].qty,
        },
        {
          where: { product_id: orderDetail[i].product_id },
        }
      );
    }

    const updateOrder = await req.context.models.orders.update(
      {
        totalproduct: numberOfEntries,
        totalprice: totalPrice,
      },
      {
        returning: true,
        where: { order_id: req.order.order_id },
      }
    );
    const result = {
      order: updateOrder,
      orderDetail: arrayProduct,
    };

    rensponseHelper.sendResponse(res, 200, result);

  } catch (error) {
    res.send(error);
  }
};

export default {
  create,
};
