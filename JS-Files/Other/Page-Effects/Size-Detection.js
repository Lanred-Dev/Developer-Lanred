let Screen_Width = screen.width;
let Screen_Height = screen.height;

if (Screen_Width === 1366 || Screen_Width === 1536 || Screen_Width >= 1920) {
    console.log("Screen size is supported.");
} else {
    window.location.replace("Not-Supported.html");
};