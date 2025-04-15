import { Router } from "express";
const router: Router = Router();

import * as controller from "../../controllers/admin/topic.controllers";

router.get("/", controller.index);

export const topicRoutes: Router = router;