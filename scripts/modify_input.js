function prepareInteractMenu() {
	/* REQUIREMENTS !important
		* every tag with text you wanna modify
			- class: 'modify_input'
			- tag: 'xlabel' // it's input's label
		* container to put inputs in 
			- class: 'interact_generated_inputs'
	*/
	const input_container = $(".interact_generated_inputs");
	input_container.empty();
	const child_class = "slide_it";
	const input_label_text = "xlabel";
	const active_class_name = "xactive";

	function input_listen_config(element, target) {
		let label = element.find(".input_item_label");
		let input = element.find(".input_item_input");
		label.hide();
		input.on("change keydown keyup paste", function() {
			input_listen(input, label, target);
		});
	}

	function input_listen(input, label, target) {
		if (input.val() != "") {
		 	target.text(input.val());
		 	label.slideDown();
		} else
   		   	target.text(target.attr("tmp"));
	};

	let inputs = $("." + child_class + "." + active_class_name).find($(".modify_input"));
	inputs.each(function() {
		let tmp_main = $("<div></div>").addClass("input_item");
		let tmp_label = $("<label></label>").addClass("input_item_label").text($(this).attr(input_label_text));
		let tmp_input = $("<input></input>").addClass("input_item_input").attr('type', 'text').attr('name', $(this).attr(input_label_text)).attr('placeholder', $(this).attr(input_label_text) + '...');
		tmp_main.append(tmp_label, tmp_input);
		input_container.append(tmp_main);
		$(this).attr('tmp', $(this).text());
		input_listen_config(tmp_main, $(this));
	});
};