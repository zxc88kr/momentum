function handleResize() {
  document.querySelector("h2").style.color = "#ffffff";
  const wframe = window.innerWidth;

  if (wframe > 1200) {
    document.body.style.backgroundColor = "#e74c3c";
  } else if (wframe > 900) {
    document.body.style.backgroundColor = "#f39c12";
  } else if (wframe > 600) {
    document.body.style.backgroundColor = "#9b59b6";
  } else if (wframe > 300) {
    document.body.style.backgroundColor = "#3498db";
  } else {
    document.body.style.backgroundColor = "#1abc9c";
  }
}

window.addEventListener("resize", handleResize);