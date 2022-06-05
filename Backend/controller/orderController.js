const Order = require("../model/orderModel");

const addOrderItem = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if( orderItems && orderItems.length === 0 ) {
    return res.status(404).json("No Order Fouund")
  } else {
      const order = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
      })
      const createOrder = order.save();
      res.status(200).json("Order Saved")
  }
};
module.exports = addOrderItem;