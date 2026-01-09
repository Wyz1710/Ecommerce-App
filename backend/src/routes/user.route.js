import  { Router } from "express";
import { addAddress, addToWishlist, deleteAddress, getAddress, getWishlist, removeFromWishlist, updateAddress } from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = Router();

router.use(protectRoute);

//address
router.post("/addresses",protectRoute, addAddress);
router.get("/addresses",protectRoute, getAddress);
router.put("/addresses/:addressId",protectRoute, updateAddress);
router.delete("/addresses/:addressId",protectRoute, deleteAddress);

//wishlist
router.post("/wishlist", addToWishlist);
router.delete("/wishlist/:productId", removeFromWishlist);
router.get("/wishlist", getWishlist);

export default router;