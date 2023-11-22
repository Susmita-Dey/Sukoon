// Detect when a new item is being loaded into the iframe
$("iframe").on("load", function () {
  // Pause any audio that is currently playing in the iframe
  var audio = $(this).contents().find("audio");
  audio.each(function () {
    this.pause();
  });
});
