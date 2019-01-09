window.onscroll = () => {
  const title = document.getElementById("title");
  const b = 255 - this.scrollY;
  const g = 255 - Math.min(this.scrollY/2, 128);
  title.style.color = "rgb(255,"+g+","+b+")";
};