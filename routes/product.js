const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router.post('/add', async (req, res) => {

  const {
    productName,
    productDesc,
    price,
    unit,
    category,
    productSize,
    productImg
  } = req.body

  const product = new Product({
    productName,
    productDesc,
    productSize,
    price,
    unit,
    category,
    productImg
  })

	try{
    await product.save()
    
		res.send({success: "Product Added Successfully"})
	} catch(error){
		res.send({error})
	}
})

router.get('/', async (req, res) => {

	try{
    const products = await Product.find()
		res.send({products})
	} catch(error){
		res.send({error})
	}
})

module.exports = router

module.exports = router