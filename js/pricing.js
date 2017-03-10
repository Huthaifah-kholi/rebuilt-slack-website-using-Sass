function select_tab(button_id){
	first_button = document.getElementById('first_tab_button');
	first_view = document.getElementById('first_view');
	
	second_button = document.getElementById('second_tab_button');
	second_view = document.getElementById('second_view');

	first_view.style.display =  'none';
	second_view.style.display =  'none';

	if (first_button.id === button_id) {
		first_button.className = "pricing_tabs_buttons_active";
		second_button.className ="pricing_tabs_buttons";
		first_view.style.display =  'block';
		second_view.style.display =  'none';
	}
	else if (second_button.id == button_id) {
		second_button.className = "pricing_tabs_buttons_active";
		first_button.className = "pricing_tabs_buttons";
		first_view.style.display =  'none';
		second_view.style.display =  'block';
	}

}

function plusDivs(step) {
	first_card = document.getElementById('card_1');
	second_card = document.getElementById('card_2');
	third_card = document.getElementById('card_3');
	fourth_card = document.getElementById('card_4');
	if (step === -1) {
		
	} else {

	}
}

// console.log("sdfsddflskjflsdj");
function select_nav(id) {
	Product_item = document.getElementById('product');
	Getting_item = document.getElementById('');
	Security_item = document.getElementById('');
	Legal_item = document.getElementById('');
	Billing_item = document.getElementById('');
	var asd = Product_item.getBoundingClientRect();
	console.log(asd,'sdfsdf');
}