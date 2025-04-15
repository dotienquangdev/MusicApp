//Upload image
const uploadImage = document.querySelector("[upload-image]");
if (uploadImage) {
    const uploadImageInput = document.querySelector("[upload-image-input]");
    const uploadImagePreview = document.querySelector("[upload-image-preview]");
    const clearButton = document.querySelector(".clear-button");

    uploadImageInput.addEventListener("change", (e) => {
        if (e.target.files.length) {
            const image = URL.createObjectURL(e.target.files[0]);
            uploadImagePreview.src = image;
        }
    });
    // Khi ấn nút X, xóa ảnh đã chọn
    clearButton.addEventListener("click", (e) => {
        e.preventDefault(); // Ngăn chặn reload trang nếu là nút submit
        uploadImageInput.value = ""; // Xóa file đã chọn
        uploadImagePreview.src = ""; // Ẩn ảnh hiển thị
        // alert("Xoa thanh cong")
    });
}
//end

//Upload audio
const uploadAudio = document.querySelector("[upload-audio]");
if (uploadAudio) {
    const uploadAudioInput = document.querySelector("[upload-audio-input]");
    const uploadAudioPlay = document.querySelector("[upload-audio-play]");
    const source = document.querySelector("source");

    uploadAudioInput.addEventListener("change", (e) => {
        if (e.target.files.length) {
            const audio = URL.createObjectURL(e.target.files[0]);

            source.src = audio;
            uploadAudioPlay.load();
        }
    });
}
//end