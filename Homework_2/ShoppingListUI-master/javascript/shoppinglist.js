
$(document).ready(function () {
	$("#shopping-form").on("submit", function(e) {

		e.preventDefault();
		var input = $('#addMe').val();
		$('#shopping-list').append('<li id="list-item">' + input + '<span id="close">X</close>' + '</li>' + '<input type="text" id="edit" style="display:none" />');
		$('#addMe').val('');


		$("#list-item").click(function(){
			$(this).hide();
			$(this).siblings("#edit").show().val($(this).text()).focus();
		});

		$("#edit").focusout(function(){
			$(this).hide();
			$(this).siblings("#list-item").show().text($(this).val());
		});

		function removeItem() {
  			$(this).parent().remove();
		}
		$(document).on('click', '#close', removeItem);

	});
});

const getShoppingList = () => {
	const ShoppingList = {
		list: [],
		addToList: (item) => {
			ShoppingList.list.push(item);

			return ShoppingList.list;	
		},
		displayList: () => {
			let str = '';
			for (let i = 0; i < ShoppingList.list.length; i++) {
				str += (i+1) + '. ' + ShoppingList.list[i] + '\n';
			}
			return str;
		},
		countItemsInList: () => {
			return ShoppingList.list.length;
		}
	};	

	return ShoppingList;
}

const ctown = getShoppingList();
const wholefoods = getShoppingList();

ctown.addToList('mangoes');
ctown.addToList('coffee');

wholefoods.addToList('steak') 
wholefoods.addToList('potatoes')

console.log(wholefoods.countItemsInList())

console.log('wholefoods fam')
console.log(wholefoods.displayList())
console.log('ctown fam')
console.log(ctown.displayList())
