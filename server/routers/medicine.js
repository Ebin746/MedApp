
const router = require("express").Router();
const {getUserMedicines,addMedicine,updateMedicine,deleteMedicine, eventAddion} = require("../controllers/medicine");

router.get("/:userid", getUserMedicines);       
router.post("/:userid", addMedicine);           
router.put("/:id/:userid", updateMedicine);     
router.delete("/:id/:userid", deleteMedicine);  
router.put("/event/:id/:userid",eventAddion)
module.exports = router;
