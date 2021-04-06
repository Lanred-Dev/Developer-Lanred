let Page_Footer = document.getElementById("Page_Footer");
let Theme_Button = document.getElementsByTagName("Theme")
let Themes = ["linear-gradient(120deg, #BA0065, #ba004d)", "linear-gradient(120deg, #6d0b3f, #610d1f)", "linear-gradient(120deg, #0084ff, #00d471)", "linear-gradient(120deg, #00509b, #007c42)"];
let Current_Theme = 0;

function Get_Cookie(Look_Name) {
    var Name = Look_Name + "=";
    var Decoded_Cookie = decodeURIComponent(document.cookie);
    var Split_Decoded = Decoded_Cookie.split(";");
    for (var Current_Cookie = 0; Current_Cookie < Split_Decoded.length; Current_Cookie++) {
        var Cookie = Split_Decoded[Current_Cookie];
        while (Cookie.charAt(0) == " ") {
            Cookie = Cookie.substring(1);
        };
        if (Cookie.indexOf(Name) == 0) {
            return Cookie.substring(Name.length, Cookie.length);
        };
    }
    return "";
};

function Load_Theme() {
    var Theme = Get_Cookie("Theme");

    if (!Theme) {
        document.cookie = "Theme=0; expires=Mon, 1 Jan 3030 12:00:00 UTC; path=/";
        document.body.style["background-image"] = Themes[0];
    } else {
        Current_Theme = parseInt(Theme);
        document.body.style["background-image"] = Themes[Theme];
    };
};

function Change_Theme() {
    if (Current_Theme > Themes.length - 2) {
        Current_Theme = 0;
    } else {
        Current_Theme += 1;
    };
    //const Background_Type_1_Elements = document.querySelectorAll("#Theme_Background_1");
        //for (var Current_Element = 0; Current_Element < Background_Type_1_Elements.length; Current_Element++) {
        //Background_Type_1_Elements[Current_Element].style["background-image"] = Themes[Current_Theme];
    //};
    document.cookie = "Theme=" + Current_Theme + "; expires=Mon, 1 Jan 3030 12:00:00 UTC; path=/";
    document.body.style["background-image"] = Themes[Current_Theme];
};

function Page_Title() {
    var Page_Path = window.location.pathname;
    var Page = Page_Path.split("/").pop();
    Page = Page.split(".").shift();
    if (Page == "index") {
        document.title = "Developer Lanred";
    } else {
        document.title = Page + " - Developer Lanred";
    };
};

Page_Title();
Load_Theme();