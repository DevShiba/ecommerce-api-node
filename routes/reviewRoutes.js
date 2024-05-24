const express = require("express");
const router = express.Router();
const {authenticateUser}  = require("../middleware/authentication");

const {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
  getSingleProductReviews
} = require("../controllers/reviewController");

router.route("/").post(authenticateUser, createReview).get(getAllReviews);

router
  .route("/:id")
  .get(getSingleReview)
  .put(authenticateUser, updateReview)
  .delete(authenticateUser, deleteReview);

router.route("/:id/reviews").get(getSingleProductReviews);

module.exports = router