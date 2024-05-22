const express = require("express");
const router = express.Router();
const {authenticateUser}  = require("../middleware/authentication");

const {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewsController");

router.route("/").post(authenticateUser, createReview).get(getAllReviews);

router
  .route("/:id")
  .get(getSingleReview)
  .put(authenticateUser, updateReview)
  .delete(authenticateUser, deleteReview);

module.exports = router