import { Request, Response, Router } from "express";
const router: Router = Router();

import * as controller from "../../controllers/client/search.controlers";

router.get("/:type", controller.result);

// router.get("/suggest", controller.suggest);

export const searchRouter: Router = router;