import { Express } from "express";
import { topicRoutes } from "./topic.routess";
import { songRoutes } from "./song.routess";
import { favoriteSongRoutes } from "./favorite-song.routess";
import { searchRouter } from "./search.routess";
const clientRoutes = (app: Express): void => {

    app.use(`/topics`, topicRoutes);

    app.use(`/songs`, songRoutes);

    app.use(`/favorite-songs`, favoriteSongRoutes);

    app.use(`/search`, searchRouter);

    app.use(`/search`, searchRouter);


};

export default clientRoutes;