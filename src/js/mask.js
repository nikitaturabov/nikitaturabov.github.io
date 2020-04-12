(function(bodyBlock) {
	// Ставим маску на инпуты

	if (!bodyBlock) {
		return;
	}

	const inputs = bodyBlock.querySelectorAll("input");

	console.log(inputs);

	[...inputs].forEach(input => {
		if (input.classList.contains("input-editor--phone")) {
			setMaskOnInput({ mask: "+7(999)999-99-99", input: input });
		}
		if (input.classList.contains("input-editor--inn")) {
			setMaskOnInput({ mask: "999999999999", input: input });
		}
		if (input.classList.contains("input-editor--snils")) {
			setMaskOnInput({ mask: "999-999-999 99", input: input });
		}
		if (input.classList.contains("input-editor--sms")) {
			setMaskOnInput({ mask: "9999", input: input, placeholder: "****" });
		}
	});
})(document.querySelector("body"));

// Устанавливаем маску по шаблону. Используем библиотеку inputmask.
function setMaskOnInput(obj) {
	const { placeholder } = obj;
	let im = new Inputmask({
		mask: obj.mask,
		showMaskOnHover: false,
		placeholder,
	});
	im.mask(obj.input);
}
