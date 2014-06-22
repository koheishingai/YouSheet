socket = io.connect(":8082")
$body = $("body")
$navright = $(".navbar-right")
$navtog = $(".navbar-toggle")
$height = window.innerHeight
$width = window.innerWidth
getURL = ->
  url = window.location.pathname
  if url isnt "/"
    url
  else
    "/index"
menuToggle = (status) ->
  if $width < 768
    if status is "close"
      $navright.removeClass("visible").addClass("disable")
      return
    else
      nStatus = $navright.hasClass("visible")
      if nStatus isnt true
        $navright.removeClass("disable").addClass("visible")
      else
        $navright.removeClass("visible").addClass("disable")
      return
init = ->
  $body.append "<script src=\"http://localhost:3001/scripts"+getURL()+".js\"></script>"
  menuToggle "close"
  return
$navtog.click ->
  $height = window.innerHeight
  $width = window.innerWidth
  menuToggle()
  return
init()
$(window).resize ->
  $height = window.innerHeight
  $width = window.innerWidth
  clearTimeout timer  if timer isnt false
  timer = setTimeout(->
    if $width > 767
      $navright.removeClass("disable").removeClass "visible"
    return
  , 200)
  return