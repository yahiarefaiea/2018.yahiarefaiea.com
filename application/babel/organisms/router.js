var Router = {
	wrapper: [],
	location: null,

	//	ROUTE
	route: function(location, callback) {
		Identity.work()
		Router.location = Router.processLocation(location)

		//	ROUTES
		Router.routes(callback)
	},

	//	PROCESS LOCATION
	processLocation: function(location) {
		if(location === undefined)
			location = window.location.hash

		return location.replace('#', '')
	},

	//	CALLBACK
	callback: function(callback) {
		$('.wrapper').removeClass('balls')
		setTimeout(function() {
			Identity.stop(function() {
				Router.updateWrapper()
				Router.updateTemplate(Router.wrapper[0])
			  window.location.hash = Router.location
			  Router.location = null
				if(!md.mobile()) Yahia.load(Router.wrapper[0])

			  //  CALLBACKS
			  Router.callbacks(Router.wrapper[0])
				if(typeof callback === 'function' && callback) callback()
			})
		}, 200)
	},

	//	UPDATE TEMPLATE
	updateTemplate: function(template) {
		var templates = $('.template')
		var current = $('.template[data-template='+template+']')

		templates.removeClass('current')
		setTimeout(function() {
			templates.hide()
			current.show().addClass('current')
		}, 1120)
	},

	//	UPDATE WRAPPER
	updateWrapper: function(push, pull) {
		if(push) Router.push(push)
		if(pull) Router.pull(pull)

		var wrapper = Router.wrapper.toString().replace(/,/g, ' ')
		$('.wrapper').attr('class', 'wrapper ' + wrapper)
	},

	//	PUSH
	push: function(items) {
		items = items.split(' ')

		for (i = 0; i < items.length; i++) {
			if(!Router.wrapper.includes(items[i]) && items[i] != '')
				Router.wrapper.push(items[i])
		}
	},

	//	PULL
	pull: function(items) {
		items = items.split(' ')

		for (i = 0; i < items.length; i++) {
			if(Router.wrapper.includes(items[i]) && items[i] != '')
				Router.wrapper.splice(Router.wrapper.indexOf(items[i]), 1)
		}
	},

	//	LISTEN
	listen: function() {
		$('.wrapper').on('click', '.router', function(e) {
			Router.route($(this).attr('href'), window[$(this).attr('data-callback')])
			e.preventDefault()
		})

		window.addEventListener('popstate', function(e) {
			Router.route(undefined)
		})
	}
}
