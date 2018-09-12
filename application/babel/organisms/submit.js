var Submit = {

  //  DATA
  data: function(template, fields) {
    var data = {}
    for (i = 0; i < fields.length; i++) {
      var field = $(fields[i])
      var name = field.attr('name')
      var value = field.val()
      data[name] = value
    }

    return data
  },

  //  PUSH
  push: function(form) {
    var template = $('.template[data-template='+form+']')
    var fields = template.find('.field input, .field textarea')

    //  WAITING
    template.find('.form .status').removeClass('current')
    template.find('.form .status[data-status=waiting]').addClass('current')

    //  AJAX
    $.ajax({
      type: 'POST',
      url: 'includes/php/'+form+'.php',
      data: {dd: JSON.stringify(Submit.data(template, fields))},
      dataType: 'json',
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        Submit.callback('error', template, fields)
      },
      success: function(data) {
        Submit.callback('success', template, fields)
      }
    })
  },

  //  CALLBACK
  callback: function(status, template, fields) {
    setTimeout(function() {

      //  SUCCESS
      if(status == 'success') {
        template.find('.form .status').removeClass('current')
        template.find('.form .status[data-status=success]').addClass('current')
      }

      //  ERROR
      else {
        template.find('.form .status').removeClass('current')
        template.find('.form .status[data-status=error]').addClass('current')
      }
    }, 4000)
  },

	//	LISTEN
	listen: function(selector) {
		$(selector).on('click', function(e) {
      if($(this).closest('.form').hasClass('validated')) {
        var form = $(this).attr('data-form')
        Submit.push(form)
      }

			e.preventDefault()
		})
	}
}
