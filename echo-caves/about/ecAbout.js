function Scrolled() {
  var floatCalled = window.pageYOffset;
  if(floatCalled > 100) {
    document.getElementById("staticMenu").style.visibility = "hidden";
    document.getElementById("floatMenu").style.visibility = "visible";
    document.getElementById("SMBtp").style.opacity = "0";
    document.getElementById("SMEchoCaves").style.opacity = "0";
    document.getElementById("SMCatalog").style.opacity = "0";
    document.getElementById("SMTp").style.opacity = "0";
    document.getElementById("SMCl").style.opacity = "0";
    document.getElementById("SMAbout").style.opacity = "0";
  }
  if(floatCalled > 150) {
    document.getElementById("FMBtp").style.opacity = "1";
    document.getElementById("FMEchoCaves").style.opacity = "1";
    document.getElementById("FMCatalog").style.opacity = "1";
    document.getElementById("FMTp").style.opacity = "1";
    document.getElementById("FMCl").style.opacity = "1";
    document.getElementById("FMAbout").style.opacity = "1";
  }
  if(floatCalled < 150) {
    document.getElementById("FMBtp").style.opacity = "0";
    document.getElementById("FMEchoCaves").style.opacity = "0";
    document.getElementById("FMCatalog").style.opacity = "0";
    document.getElementById("FMTp").style.opacity = "0";
    document.getElementById("FMCl").style.opacity = "0";
    document.getElementById("FMAbout").style.opacity = "0";
  }
  if(floatCalled < 100) {
    document.getElementById("floatMenu").style.visibility = "hidden";
    document.getElementById("staticMenu").style.visibility = "visible";
    document.getElementById("SMBtp").style.opacity = "1";
    document.getElementById("SMEchoCaves").style.opacity = "1";
    document.getElementById("SMCatalog").style.opacity = "1";
    document.getElementById("SMTp").style.opacity = "1";
    document.getElementById("SMCl").style.opacity = "1";
    document.getElementById("SMAbout").style.opacity = "1";
  }
}
function BackToProjects() {
  window.location.href = 'https://reactivepeakstudios.github.io/projects';
}
function EchoCaves() {
  window.location.href = 'https://reactivepeakstudios.github.io/echo-caves/';
}
function Catalog() {
  window.location.href = 'https://reactivepeakstudios.github.io/echo-caves/catalog';
}
function Themepunk() {
  window.location.href = 'https://reactivepeakstudios.github.io/echo-caves/themepunk';
}
function Changelog() {
  window.location.href = 'https://reactivepeakstudios.github.io/echo-caves/changelog';
}