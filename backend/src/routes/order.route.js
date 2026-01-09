import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware";
import { createOrder, getUserOrder } from "../controllers/order.controller";

const router = Router();

router.post("/",protectRoute,createOrder);
router.get("/",protectRoute,getUserOrder);

export default router;