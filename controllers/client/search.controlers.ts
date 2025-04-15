import { Request, Response } from "express";
import Song from "../../models/song.model";
import Singer from "../../models/singer.model";
import { convertToSlug } from "../../helpers/convertToSlug";
import { title } from "process";

//[GET] /topic/type
export const result = async (req: Request, res: Response) => {
    const type = req.params.type;
    const keyword: string = `${req.query.keyword}`;

    let newSongs = [];

    if (keyword) {
        const keywordRegex = new RegExp(keyword, "i");

        // Tảoa slug không dấu , có thêm dấu '-' ngăn cách
        const stringSlug = convertToSlug(keyword);
        const stringSlugRegex = new RegExp(stringSlug, "i");

        // console.log(stringSlugRegex);

        const songs = await Song.find({
            $or: [
                { title: keywordRegex },
                { slug: stringSlugRegex },
            ]
        });

        for (const item of songs) {
            const infoSinger = await Singer.findOne({
                _id: item.singerId,
            });
            // item["infoSinger"] = infoSinger;
            newSongs.push({
                id: item.id,
                title: item.title,
                avatar: item.avatar,
                like: item.like,
                slug: item.slug,
                infoSinger: {
                    fullName: infoSinger.fullName,
                }
            })
        }
    }

    switch (type) {
        case "result":
            res.render("client/pages/search/result", {
                pageTitle: `Kết quả: ${keyword}`,
                keyword: keyword,
                songs: newSongs,
            });
            break;
        case "suggest":
            res.json({
                code: 200,
                message: "Thành công !",
                songs: newSongs,
            });
            break;

        default:
            break;
    }
}

// //[GET] /topic/
// export const suggest = async (req: Request, res: Response) => {

//     const keyword: string = `${req.query.keyword}`;

//     res.render("client/pages/search/result", {
//         pageTitle: `Kết quả: ${keyword}`,
//     });
// }

// 1h19 p