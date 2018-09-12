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
  push: function(form, template, fields) {
    console.log(Submit.data(template, fields))
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

    status = 'success'

    //  SUCCESS
    if(status == 'success') {
      template.addClass('success')
      setTimeout(function() {
        fields.val('')
        inputTest(fields)
      }, 1500)
      setTimeout(function() {
        template.removeClass('success')
      }, 4000)
    }

    //  ERROR
    else {
      template.addClass('error')
      setTimeout(function() {
        template.removeClass('error')
      }, 4000)
    }
  },

	//	LISTEN
	listen: function(selector) {
		$(selector).on('click', function(e) {
      if($(this).closest('.form').hasClass('validated')) {
        var form = $(this).attr('data-form')
        var template = $('.template[data-template='+form+']')
        var fields = template.find('.field input, .field textarea')
        Submit.push(form, template, fields)
      }

			e.preventDefault()
		})
	}
}
