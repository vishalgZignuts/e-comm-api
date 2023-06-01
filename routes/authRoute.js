const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getAllUser,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unBlockUser,
} = require("../controllers/userCtrl");
const { authMidleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getAllUser);
router.get("/:id", authMidleware, isAdmin, getUser);
router.delete("/:id", deleteUser);
router.put("/edit-user", authMidleware, updateUser);
router.put("/block-user/:id", authMidleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMidleware, isAdmin, unBlockUser);

module.exports = router;
