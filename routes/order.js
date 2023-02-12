const express = require('express')
const Order = require('../models/Order')
const router = express.Router()
const Product = require('../models/Product')

router.post('/new', async (req, res) => {

  const order = new Order(req.body)
	try{
    await order.save()
		res.send({success: "Order Placed Successfully"})
	} catch(error){
		res.send({error})
	}
})

router.post('/update-status', async (req, res) => {

  const { orderID, orderStatus } = req.body

	try{
    await Order.findByIdAndUpdate({_id: orderID}, { orderStatus: orderStatus }) 
    
		res.send({success: "Order Status Updated Successfully"})
	} catch(error){
		res.send({error})
	}
})

module.exports = router

module.exports = router