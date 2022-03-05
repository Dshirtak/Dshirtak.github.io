const express = require("express");
const router = express.Router();
router.get("/", async (req, res) => {
  var productDetails = {
    mainImage: "productmainimage.png",
    productsImages: [
      "mainimage.png",
      "mainimage2x.png",
      "shirtback.png",
      "shirtback2x.png",
      "shirtfront.png",
      "shirtfront2x.png",
      "shirtmiddle.png",
      "shirtmiddle2x.png",
      "shirtupperback.png",
      "shirtupperback2x.png",
    ],
    productSizes:["Small", "Medium", "Large", "XLarge", "XXLarge"],
    productColors:["blackwhite.png","redshirt.png"],
  };
  res.send(productDetails);
});
module.exports = router;
