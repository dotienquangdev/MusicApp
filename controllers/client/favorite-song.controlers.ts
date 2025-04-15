import FavoriteSong from '../../models/favorite-song.model';
import { Request, Response } from "express";
import Song from '../../models/song.model';
import Singer from '../../models/singer.model';

//[GET] /favorite-song/
export const index = async (req: Request, res: Response) => {
    const favoriteSongs = await FavoriteSong.find({
        // userId: "",
        deleted: false,

    })

    for (const item of favoriteSongs) {
        const infoSong = await Song.findOne({
            _id: item.songId,
        })
        // console.log()
        const infoSinger = await Singer.findOne({
            _id: infoSong.singerId,
        })
        // console.log(infoSong);
        item["infoSong"] = infoSong;
        item["infoSinger"] = infoSinger;
    }

    // console.log(favoriteSongs);

    res.render("client/pages/favorite-songs/index", {
        pageTitle: "Bài hát yêu thích",
        favoriteSongs: favoriteSongs,
    });
}