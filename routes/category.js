const express = require('express')
const router = express.Router()
const Category = require('../models/Category')

// Send Message
router.post('/add', async (req, res) => {

  const { categoryName, categoryImg } = req.body

  const category = new Category({
    categoryName,
    categoryImg
  })

	try{
    await category.save()
    
		res.send({success: "Category Added Successfully"})
	} catch(error){
		res.send({error: error.message})
	}
})

router.get('/', async (req, res) => {

	try{
    const categories = await Category.find()
		res.send({categories})
	} catch(error){
		res.send({error: error.message})
	}
})

module.exports = router