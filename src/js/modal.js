(function(modalArea) {
	if (!modalArea) {
		return;
	}

	const btnOpenModal = document.querySelector(`[data-modal="form"]`);

	btnOpenModal.addEventListener("click", e => {
		modalArea.classList.add("bk-modals-area--active");
		modalArea.querySelector(`.bk-modal--${e.target.dataset.modal}`).classList.add("bk-modal--active");
		document.querySelector("body").style.overflowY = "hidden";
	});

	modalArea.addEventListener("click", function(e) {
		if (e.target.closest(".js-btn-close-form") || !e.target.closest(".bk-modal")) {
			modalArea.classList.remove("bk-modals-area--active");
			document.querySelector("body").style.overflowY = "auto";
		}
	});
})(document.querySelector(".bk-modals-area"));
