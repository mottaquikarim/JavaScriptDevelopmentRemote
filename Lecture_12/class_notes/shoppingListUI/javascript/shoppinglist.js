// this is a custom object that we defined
// that is supposed to model the behavior of a shopping list
// the STATE of the user interface
const getShoppingList = () => {
	const ShoppingList = {
		list: [],
		addToList: (item) => {
			ShoppingList.list.push(item);

			return ShoppingList.list;	
		},
		editItemInList: (index, newItemValue) => {
			// ??? can you implement this using the ShoppingList.list.forEach method?
			// ??? can you implement this using the ShoppingList.list.map method?

			// ensure the index is within the bounds of our list
			if (index < 0 || index > ShoppingList.countItemsInList()) {
				return;
			}

			// ensure that the newitemValue is npt empty
			if (newItemValue === '' || newItemValue.trim() === '') {
				return;
			}

			ShoppingList.list[index] = newItemValue;
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

/*

USER DOES SOMETHING 
	-> 
	[data: either something added or removed] 
	-> 
	call shoppinglist function to update list array
	->
	redraw the entire UI with website specific stuff (ie: classes, etc)
	->
	USER SEE UPDATED UI

	...

	repeat
*/


// -----------------------------------------------------
// create empty shopping list
const myShoppingList = getShoppingList();


// we use the render function to ALWAYS draw an
// accurate depiction of the shoppinglist for the user
const render = (container, shoppingList) => {
	let str = '';
	for (let i = 0; i < shoppingList.countItemsInList(); i++) {
		str += `<li>
			<span class="js-shopping-list-listitem" data-idx="${i}">${shoppingList.list[i]}</span>
			<span class="js-delete-btn btn btn-primary" data-idx="${i}">X</span>
		</li>`;
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
	// ??? can you implement this using the parentNode approach...?

	// if (evt.target.matches('.js-delete-btn')) {
	// 	const itemContainer = evt.target.previousSibling
	// 	myShoppingList.removeFromList(itemContainer.innerHTML);
	// 	render(shoppingListCont, myShoppingList);
	// }	
	if (evt.target.matches('.js-delete-btn')) {
		const idx = evt.target.getAttribute('data-idx');
		const itemContainer = document.querySelector('.js-shopping-list-listitem[data-idx="'+idx+'"]');
		myShoppingList.removeFromList(itemContainer.innerHTML);
		render(shoppingListCont, myShoppingList);
	}
	else if (evt.target.matches('.js-shopping-list-listitem')) {
		const idx = evt.target.getAttribute('data-idx');
		evt.target.innerHTML = `<input type="text" 
			class="form-control js-edit-listitem" 
			data-idx="${idx}"
			placeholder="${evt.target.innerHTML}">`;
		evt.target.querySelector('input').focus()
	}
}

const onContainerKeyPressed = evt => {
	if (evt.keyCode === 13 && evt.target.matches('.js-edit-listitem')) {
		// now we are in business - we want to invoke the shoppingList.editItem function
		const newItemValue = evt.target.value;
		const idx = parseInt(evt.target.getAttribute('data-idx'), 10);
		myShoppingList.editItemInList(idx, newItemValue);
		render(shoppingListCont, myShoppingList);
	}
}

// INIT VARIABLES
const shoppingListInput = document.querySelector('.js-shopping-list-item');
const addToList = document.querySelector('.js-add-to-list');
const shoppingListCont = document.querySelector('.js-shopping-list-container')

// EVENT HANDLERS
addToList.addEventListener('click', onAddToListClicked);
shoppingListInput.addEventListener('keypress', onEnterKeyPressed);
shoppingListCont.addEventListener('click', onContainerClicked);
shoppingListCont.addEventListener('keypress', onContainerKeyPressed);


