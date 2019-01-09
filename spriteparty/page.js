window.onscroll = () => {
  const title = document.getElementById("title");
  const b = 255 - (this.scrollY/2);
  const g = 255 - Math.min(this.scrollY/4, 128);
  title.style.color = "rgb(255,"+g+","+b+")";
};