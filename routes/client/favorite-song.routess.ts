import { Request, Response, Router } from "express";
const router: Router = Router();

import * as controller from "../../controllers/client/favorite-song.controlers";

router.get("/", controller.index);

export const favoriteSongRoutes: Router = router;