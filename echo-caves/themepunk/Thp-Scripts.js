//Global Initializations
var json = ({"ThemeName":"","Background":{"NewPrimaryBackgroundColor":"","NewSecondaryBackgroundColor":"","NewTertiaryBackgroundColor":"","NewQuaternaryBackgroundColor":"","NewQuinaryBackgroundColor":""},"Text":{"NewPrimaryTextColor":"","NewSecondaryTextColor":"","NewPrimaryAccentTextColor":"","NewSecondaryAccentTextColor":""},"Grade":{"NewPrimaryGradeColor":"","NewSecondaryGradeColor":"","NewTertiaryGradeColor":""},"Menu":{"NewPrimaryMenuColor":"","NewSecondaryMenuColor":""}})
var jsonData = JSON.stringify(json);
var themeData = JSON.parse(jsonData);
confirmButtonDisabled();

function Update() {
    writeJSON();
    //CSS Property Assignments
    document.documentElement.style.setProperty("--BackgroundColor1", themeData.Background.NewPrimaryBackgroundColor);
    document.documentElement.style.setProperty("--BackgroundColor2", themeData.Background.NewSecondaryBackgroundColor);
    document.documentElement.style.setProperty("--BackgroundColor3", themeData.Background.NewTertiaryBackgroundColor);
    document.documentElement.style.setProperty("--BackgroundColor4", themeData.Background.NewQuaternaryBackgroundColor);
    document.documentElement.style.setProperty("--BackgroundColor5", themeData.Background.NewQuinaryBackgroundColor);
    document.documentElement.style.setProperty("--TextColor1", themeData.Text.NewPrimaryTextColor);
    document.documentElement.style.setProperty("--TextColor2", themeData.Text.NewSecondaryTextColor);
    document.documentElement.style.setProperty("--AccentTextColor1", themeData.Text.NewPrimaryAccentTextColor);
    document.documentElement.style.setProperty("--AccentTextColor2", themeData.Text.NewSecondaryAccentTextColor);
    document.documentElement.style.setProperty("--GradeColor1", themeData.Grade.NewPrimaryGradeColor);
    document.documentElement.style.setProperty("--GradeColor2", themeData.Grade.NewSecondaryGradeColor);
    document.documentElement.style.setProperty("--GradeColor3", themeData.Grade.NewTertiaryGradeColor);
    document.documentElement.style.setProperty("--MenuColor1", themeData.Menu.NewPrimaryMenuColor);
    document.documentElement.style.setProperty("--MenuColor2", themeData.Menu.NewSecondaryMenuColor);
}
function Confirm() {
    writeJSON();
    //Copy All JSON Data To Clipboard
    var JsonThemeData = JSON.stringify(themeData);
    var rawThemeData = document.createElement('textarea');
    rawThemeData.value = JsonThemeData;
    document.body.appendChild(rawThemeData);
    rawThemeData.select();
    rawThemeData.setAttribute('readonly', '');
    rawThemeData.style = {position: 'absolute', left: '-9999px'};
    document.execCommand('copy');
    document.body.removeChild(rawThemeData);
}

function writeJSON() {
    themeData.ThemeName = document.getElementById("ThemeName").value;
    themeData.Background.NewPrimaryBackgroundColor = document.getElementById("BGColor1").value;
    themeData.Background.NewSecondaryBackgroundColor = document.getElementById("BGColor2").value;
    themeData.Background.NewTertiaryBackgroundColor = document.getElementById("BGColor3").value;
    themeData.Background.NewQuaternaryBackgroundColor = document.getElementById("BGColor4").value;
    themeData.Background.NewQuinaryBackgroundColor = document.getElementById("BGColor5").value;    
    themeData.Text.NewPrimaryTextColor = document.getElementById("TextColor1").value;
    themeData.Text.NewSecondaryTextColor = document.getElementById("TextColor2").value;
    themeData.Text.NewPrimaryAccentTextColor= document.getElementById("AccentTextColor1").value;
    themeData.Text.NewSecondaryAccentTextColor = document.getElementById("AccentTextColor2").value; 
    themeData.Grade.NewPrimaryGradeColor = document.getElementById("GradeColor1").value;
    themeData.Grade.NewSecondaryGradeColor = document.getElementById("GradeColor2").value;
    themeData.Grade.NewTertiaryGradeColor = document.getElementById("GradeColor3").value;
    themeData.Menu.NewPrimaryMenuColor = document.getElementById("MenuColor1").value;
    themeData.Menu.NewSecondaryMenuColor = document.getElementById("MenuColor2").value;
}

function confirmButtonDisabled() {
    document.getElementById('ConfirmButton').disabled = true;
    document.getElementById('ConfirmButton').style = "background-color: #006F00;color:#AFAFAF";
}
function confirmButtonEnabled() {
    document.getElementById('ConfirmButton').disabled = false;
    document.getElementById('ConfirmButton').style = "background-color: #00AF00;color:#FFFFFF";
}

function updateButtonState() {
    if(document.getElementById("ThemeName").value != "") {
        confirmButtonEnabled();
    } else {
        confirmButtonDisabled();
    }
}