"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const topic_routess_1 = require("./topic.routess");
const song_routess_1 = require("./song.routess");
const favorite_song_routess_1 = require("./favorite-song.routess");
const search_routess_1 = require("./search.routess");
const clientRoutes = (app) => {
    app.use(`/topics`, topic_routess_1.topicRoutes);
    app.use(`/songs`, song_routess_1.songRoutes);
    app.use(`/favorite-songs`, favorite_song_routess_1.favoriteSongRoutes);
    app.use(`/search`, search_routess_1.searchRouter);
    app.use(`/search`, search_routess_1.searchRouter);
};
exports.default = clientRoutes;
