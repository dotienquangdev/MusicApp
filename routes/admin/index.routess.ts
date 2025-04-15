import { Express } from "express";
import { dashboardRoutes } from "./dashboard.routess";
import { systemConfig } from "../../config/config";
import { topicRoutes } from "./topic.routess";
import { songRoutes } from "./song.routess";
import { uploadRoutes } from "./upload.routess";

const clientRoutes = (app: Express): void => {

    const PATH_ADMIN = `/${systemConfig.prefixAdmin}`;

    app.use(`${PATH_ADMIN}/dashboard`, dashboardRoutes);

    app.use(`${PATH_ADMIN}/topics`, topicRoutes);

    app.use(`${PATH_ADMIN}/songs`, songRoutes);
    app.use(`${PATH_ADMIN}/songs`, uploadRoutes);

};

export default clientRoutes;