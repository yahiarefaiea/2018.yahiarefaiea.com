$(document).ready(function() {
  $('#burger').on('click', function(e) {
    $('.wrapper').toggleClass('balls')
    e.preventDefault()
  })
  $('.wrapper:not(.balls) #identity > div').on('click', function(e) {
    $('.wrapper').addClass('balls')
    e.preventDefault()
  })
})
