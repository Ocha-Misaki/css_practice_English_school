$(function () {
  $(".hamburger").on("click", function () {
    hamburger()
  })
  $(".header-list a").on("click", function () {
    hamburger()
  })

  $(".inview-slide-left").on("inview", function (
    event,
    isInView,
    visiblePartX,
    visiblePartY
  ) {
    if (isInView) {
      $(this).stop().addClass("slide-left")
    }
  })

  $(".inview-slide-right").on("inview", function (isInView) {
    if (isInView) {
      $(this).stop().addClass("slide-right")
    }
  })

  $(".inview-balloon").on("inview", function (isInView) {
    if (isInView) {
      $(this).stop().addClass("balloon")
    }
  })
})

function hamburger() {
  $(".hamburger").toggleClass("active")

  if ($(".hamburger").hasClass("active")) {
    $(".header-list").addClass("active")
  } else {
    $(".header-list").removeClass("active")
  }
}
