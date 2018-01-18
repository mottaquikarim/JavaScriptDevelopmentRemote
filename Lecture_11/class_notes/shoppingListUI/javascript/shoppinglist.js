const getShoppingList = () => {
	const ShoppingList = {
		list: [],
		addToList: (item) => {
			ShoppingList.list.push(item);

			return ShoppingList.list;	
		},
		removeFromList: (listItem) => {
			ShoppingList.list = ShoppingList.list.filter((currentItem) => {
				return currentItem !== listItem;
			});

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
};

// -----------------------------------------------------
// create empty shopping list
const myShoppingList = getShoppingList();


// we use the render function to ALWAYS draw an
// accurate depiction of the shoppinglist for the user
const render = (container, shoppingList) => {
	let str = '';
	for (let i = 0; i < shoppingList.countItemsInList(); i++) {
		str += `<li>${shoppingList.list[i]}</li>`;
	}

	container.innerHTML = `<ol>${str}</ol>`

}

// EVENT LISTENERS
const onAddToListClicked = (evt) => {
	// read the input field
	const inputValue = shoppingListInput.value;

	// clear the input field by setting equal to empty string ('')
	shoppingListInput.value = '';

	myShoppingList.addToList(inputValue);
	render(shoppingListCont, myShoppingList)
} // button click handler

const onEnterKeyPressed = (evt) => {
	if (evt.keyCode === 13) {
		// read the input field
		const inputValue = evt.target.value;

		// clear the input field by setting equal to empty string ('')
		evt.target.value = '';

		myShoppingList.addToList(inputValue);
		render(shoppingListCont, myShoppingList)
	}
} // keypress handler

const onContainerClicked = (evt) => {
	myShoppingList.removeFromList(evt.target.innerHTML);
	render(shoppingListCont, myShoppingList);
}

// INIT VARIABLES
const shoppingListInput = document.querySelector('.js-shopping-list-item');
const addToList = document.querySelector('.js-add-to-list');
const shoppingListCont = document.querySelector('.js-shopping-list-container')

// EVENT HANDLERS
addToList.addEventListener('click', onAddToListClicked);
shoppingListInput.addEventListener('keypress', onEnterKeyPressed);
shoppingListCont.addEventListener('click', onContainerClicked);


