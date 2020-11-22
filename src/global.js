export const disableScroll = () => {
  const scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft =
    window.pageXOffset || document.documentElement.scrollLeft;
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  }
}

export const enableScroll = () => {
  let lastScrollTop = 0;
  window.onscroll = () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight}`;
    if (st > lastScrollTop) {
      document.querySelectorAll("#section").forEach((section) => {
        section.style.pointerEvents = "none";
      })
      console.log("Hide")
      document.getElementById("main-div").style.opacity = 1 - scroll;
      if (scroll > .9) {
        document.querySelector("#smj").style.zIndex = Infinity
      }
    } else {
      console.log("show")
      document.getElementById("main-div").style.opacity = 1 - scroll;
      if (scroll <= 0.8) {
        document.querySelectorAll("#section").forEach((section) => {
          section.style.pointerEvents = "auto";
        })
      }
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }
};