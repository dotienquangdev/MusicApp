import { Request, Response } from "express";

//GET /admin/dashboard
export const index = async (req: Request, res: Response) => {

    console.log(req.body);
    res.json({
        location: req.body.file
    });
};