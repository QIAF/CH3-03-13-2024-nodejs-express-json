const fs = require("fs");
const express = require('express');
const router = express.Router();

router.route("/")
.get(customerController.getCustomer)
.post(createCustomer);
router
  .route("/:id")
  .get(getCustomerById)
  .patch(updateCustomer)
  .delete(deleteCustomer);

module.exports = router;