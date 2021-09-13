$(document).ready(function() {
	/*	REQUIREMENTS !important
		* parents
			- class: 'slide_parent'
		* for each main menu's block (eg. div) 
			- unique #id
			- class: 'slide_it'
		* if wanna add <link> with css put it as first line
	*/
	const parents = $('.slide_parent');
	const first_element_index = 0;
	const active_class_name = 'xactive';

	function changeActiveElement(elements, active_element, previous_element) {
		let previous = $('#' + elements[previous_element]);
		let active = $('#' + elements[active_element]);
		previous.animate({opacity: '0%'}, 'fast', function () {
			previous.removeClass(active_class_name);
			previous.hide();
			active.css('opacity', '0%');
			active.show();
			active.addClass(active_class_name);
			active.animate({opacity: '100%'}, 'fast', function () {
				prepareInteractMenu();
			});
		});
	}

	function initElement(elements, active_element) {
		let active = $('#' + elements[active_element]);
		for(var i=0; i<elements.length; i++)
			$('#' + elements[i]).hide();
		active.addClass(active_class_name);
		active.show('fast', function() {prepareInteractMenu();});
	}

	parents.each(function() {
		const slide_it = $(this).find('.slide_it');

		let elements = [];
		slide_it.each(function(){
			elements.push($(this).attr('id'));
		});

		let active_element = first_element_index;
		let button_left = $(this).parent().find(".button_left");
		let button_right = $(this).parent().find(".button_right");

		button_left.on('click', function() {
			if (active_element > 0){
				let previous_element = active_element;
				active_element--;
				changeActiveElement(elements, active_element, previous_element);
			}
		});

		button_right.on('click', function() {
			if (active_element < elements.length-1) {
				let previous_element = active_element;
				active_element++;
				changeActiveElement(elements, active_element, previous_element);
			}
		});
		previous_element = 0;
		initElement(elements, active_element);
	});
});