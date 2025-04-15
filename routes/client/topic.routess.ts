import { Request, Response, Router } from "express";
const router: Router = Router();

import * as controller from "../../controllers/client/topic.controllers";

router.get("/", controller.topics);


export const topicRoutes: Router = router;