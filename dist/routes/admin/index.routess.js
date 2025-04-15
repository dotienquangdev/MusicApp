"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard_routess_1 = require("./dashboard.routess");
const config_1 = require("../../config/config");
const topic_routess_1 = require("./topic.routess");
const song_routess_1 = require("./song.routess");
const upload_routess_1 = require("./upload.routess");
const clientRoutes = (app) => {
    const PATH_ADMIN = `/${config_1.systemConfig.prefixAdmin}`;
    app.use(`${PATH_ADMIN}/dashboard`, dashboard_routess_1.dashboardRoutes);
    app.use(`${PATH_ADMIN}/topics`, topic_routess_1.topicRoutes);
    app.use(`${PATH_ADMIN}/songs`, song_routess_1.songRoutes);
    app.use(`${PATH_ADMIN}/songs`, upload_routess_1.uploadRoutes);
};
exports.default = clientRoutes;
