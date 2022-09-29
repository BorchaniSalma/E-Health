import express from "express";
import {
    deleteRole,
    getAllAccessRights,
    getAllRoles,
    getRoleById,
    patchRole,
    postRole,
} from "../Controllers/roles.js";
import { protect } from "../middleware/protect.js";
import { restrictToRole } from "../middleware/restrictToRole.js";
const router = express.Router();

router.get(
    "/access-rights",
    protect,
    restrictToRole("admin"),
    getAllAccessRights
);
router.get("/:id", protect, restrictToRole("admin"), getRoleById);
router.get("/", protect, restrictToRole("admin"), getAllRoles);
router.post("/", protect, restrictToRole("admin"), postRole);
router.patch("/:id", protect, restrictToRole("admin"), patchRole);
router.delete("/:id", protect, restrictToRole("admin"), deleteRole);

export default router;
