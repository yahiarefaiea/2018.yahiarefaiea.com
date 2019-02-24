$(document).ready(function() {
  var list = $('.list')
  var link = list.find('li.listItem a, li.archived a')

  //  LISTEN
  link.hover(function() {
    $(this).closest('.list').addClass('hover')
  }, function() {
    $(this).closest('.list').removeClass('hover')
  })
})
