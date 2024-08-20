function Scrolled() {
  var floatCalled = window.pageYOffset;
  if(floatCalled > 100) {
  document.getElementById("staticMenu").style.visibility = "hidden";
  document.getElementById("floatMenu").style.visibility = "visible";
  document.getElementById("SMHome").style.opacity = "0";
  document.getElementById("SMDownloads").style.opacity = "0";
  document.getElementById("SMProjects").style.opacity = "0";
  document.getElementById("SMAbout").style.opacity = "0";
  document.getElementById("SMContact").style.opacity = "0";
  }
  if(floatCalled > 150) {
    document.getElementById("FMHome").style.opacity = "1";
    document.getElementById("FMDownloads").style.opacity = "1";
    document.getElementById("FMProjects").style.opacity = "1";
    document.getElementById("FMAbout").style.opacity = "1";
    document.getElementById("FMContact").style.opacity = "1";
  }
  if(floatCalled < 150) {
    document.getElementById("FMHome").style.opacity = "0";
    document.getElementById("FMDownloads").style.opacity = "0";
    document.getElementById("FMProjects").style.opacity = "0";
    document.getElementById("FMAbout").style.opacity = "0";
    document.getElementById("FMContact").style.opacity = "0";
  }
  if(floatCalled < 100) {
    document.getElementById("floatMenu").style.visibility = "hidden";
    document.getElementById("staticMenu").style.visibility = "visible";
    document.getElementById("SMHome").style.opacity = "1";
    document.getElementById("SMDownloads").style.opacity = "1";
    document.getElementById("SMProjects").style.opacity = "1";
    document.getElementById("SMAbout").style.opacity = "1";
    document.getElementById("SMContact").style.opacity = "1";
  }
}
function Home() {
  window.location.href = 'https://reactivepeakstudios.github.io';
}
function Downloads() {
  window.location.href = 'https://reactivepeakstudios.github.io/downloads';
}
function Projects() {
  window.location.href = 'https://reactivepeakstudios.github.io/projects';
}
function Contact() {
  window.location.href = 'https://reactivepeakstudios.github.io/contact';
}