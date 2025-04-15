import mongoose from "mongoose";
const favoriteSchema = new mongoose.Schema(
    {
        userId: String,
        songId: String,
        deleted: {
            type: Boolean,
            default: false
        },
        deletedAt: Date
    },
    {
        timestamps: true
    }
);
const FavoriteSong = mongoose.model('FavoriteSong', favoriteSchema, "favorite-songs");

export default FavoriteSong;