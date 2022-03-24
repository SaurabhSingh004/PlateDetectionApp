const PlateInfo = require("../Models/PlateInfo");
const router = require("express").Router();

router.get("/addplate", async (req, res) => {
    
    const newPlate = new PlateInfo({
        platenumber: req.body.platenumber,
      });
      const chkplate=PlateInfo.findOne({ platenumber: req.body.phonenumber });
      
      try{
      const plateinfo = await newPlate.save();
        res.status(200).json(plateinfo);
    }
    catch (err){
        console.log(err);
      res.status(500).json(err)
    }
  });
  module.exports = router;