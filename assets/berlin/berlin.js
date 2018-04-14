function berlinScroll() {
  if (document.documentElement.scrollTop > 1050) {
    document.getElementById("top").className = "unhide";
  } else if (document.documentElement.scrollTop > 350) {
    document.getElementById("middle").className = "unhide";
  } else if (document.documentElement.scrollTop < 450) {
    document.getElementById("middle").classList.remove("unhide");
  }
}