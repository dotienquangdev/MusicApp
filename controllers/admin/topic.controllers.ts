import { Request, Response } from "express";
import Topic from "../../models/topic.model";

//GET /admin/dashboard
export const index = async (req: Request, res: Response) => {
    const topics = await Topic.find({
        deleted: false,
    });
    // console.log(topics);
    res.render("admin/pages/topics/index", {
        pageTitle: "Quản lý chủ đề",
        topics: topics,
    });
};