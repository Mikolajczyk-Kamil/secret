$(document).ready(function () {
	const containers = $('.modify_container');
	const interact_section = $('.interact_section_edit');
	const input_label_text = 'xlabel';

	function modify_section_config() {

	};

	function modify_section() {};

	containers.each(function () {
		let tmp_main = $("<div></div>").addClass("input_section_edit_item").addClass("flex");
		let tmp_label = $("<label></label>").addClass("input_section_edit_label").text($(this).attr(input_label_text));
		let tmp_input = $("<input></input>").addClass("input_section_edit_input").attr('type', 'number').attr('min', '0').attr('max', '100').attr('step', '5').attr('name', $(this).attr(input_label_text)).attr('placeholder', $(this).attr(input_label_text) + '...');

		tmp_main.append(tmp_label, tmp_input);
		interact_section.append(tmp_main);
	});
});