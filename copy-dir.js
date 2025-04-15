const fs = require("fs-extra");

const listFolderCopy = [
    {
        sourceDirectory: "views",
        targetDiretory: "dist/views"
    },
    {
        sourceDirectory: "public",
        targetDiretory: "dist/public"
    }
];

listFolderCopy.forEach(item => {
    fs.copy(item.sourceDirectory, item.targetDiretory, (err) => {
        if (err) {
            console.error(`Lỗi sao chép thư mục ${item.sourceDirectory}:`, err);
        } else {
            {
                console.log(`Sao chép thành công thư mục ${item.sourceDirectory}`);
            }
        }
    });
});