// Video covers / inline videos made by _includes/media.html.
// They load only when they come near the screen, play muted on a loop while
// visible, and pause when scrolled out of view.
(function () {
  var videos = document.querySelectorAll("video.lazy-video");
  if (!videos.length) return;

  function load(v) {
    if (!v.getAttribute("src") && v.dataset.src) {
      v.preload = "auto";
      v.src = v.dataset.src;
    }
  }

  function play(v) {
    load(v);
    v.muted = true; // required for autoplay in every browser
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
  }

  // Old browsers: just load and play everything.
  if (!("IntersectionObserver" in window)) {
    videos.forEach(play);
    return;
  }

  // Start downloading a little before the video scrolls into view.
  var loader = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        load(e.target);
        loader.unobserve(e.target);
      }
    });
  }, { rootMargin: "300px 0px" });

  // Play while on screen, pause when off screen.
  var player = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) play(e.target);
      else e.target.pause();
    });
  });

  videos.forEach(function (v) {
    loader.observe(v);
    player.observe(v);
  });
})();
