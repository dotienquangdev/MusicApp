import { Router } from "express";
import multer from "multer";
const router: Router = Router();

import * as controller from "../../controllers/admin/song.controllers";
import * as   uploadCloud from "../../middlewares/admin/uploadCloud.middlewares";
const upload = multer();
router.get("/", controller.index);
router.get("/create", controller.create);
router.post(
    "/create",
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "audio", maxCount: 1 }
    ]),
    uploadCloud.uploadFileds,
    controller.createPost
);

router.get("/edit/:id", controller.edit);

router.patch(
    "/edit/:id",
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "audio", maxCount: 1 }
    ]),
    uploadCloud.uploadFileds,
    controller.editPatch
);

export const songRoutes: Router = router;