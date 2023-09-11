const express= require('express');
const router = express.Router();
const blogController = require('../Controllers/blogController');
const commentController= require('../controllers/commentController');
const messageController= require('../controllers/messageController');
const portfolioController= require('../controllers/portfolioController');
const productController= require('../controllers/productController');



router.get("/blogController1",blogController.create);
router.get("/blogController2",blogController.read);
router.get("/blogController3",blogController.delete);
router.get("/blogController4",blogController.update);

router.get("/commentController1",commentController.create);
router.get("/commentController2",commentController.read);
router.get("/commentController3",commentController.delete);
router.get("/commentController4",commentController.update);

router.get("/messageController1",messageController.create);
router.get("/messageController2",messageController.read);
router.get("/messageController3",messageController.delete);
router.get("/messageController4",messageController.update);

router.get("/portfolioController1",portfolioController.create);
router.get("/portfolioController2",portfolioController.read);
router.get("/portfolioController3",portfolioController.delete);
router.get("/portfolioController4",portfolioController.update);

router.get("/productController1",productController.create);
router.get("/productController2",productController.read);
router.get("/productController3",productController.delete);
router.get("/productController4",productController.update);

module.exports=router;