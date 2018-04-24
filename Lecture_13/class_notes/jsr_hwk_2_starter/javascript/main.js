// Sample shopping list methods
// remember these must be turned into a factory function!
const newShoppingListItem = (item,price) => ({item, price,})
const addToShoppingList = (item,list=[]) => list.concat([item]);
const removeFromShoppingList = (list=[]) => list.slice(0, -1);
const removeFirstItem = (list=[]) => list.slice(1);
const removeNthItem = (i,list = []) => {
    if (i<list.length && i>0 && Number.isInteger(i) == true) {
        list.splice(i, 1);
    } else {
        throw new Error('error')
    }
    return list;
};

const render = () => {
	let htmlStr = '<ul class="list-group">';
	for(let i = 0; i < shoppingList.length; i++) {
		htmlStr += `<li class="list-group-item">
			${shoppingList[i].item}
		</li>`
	}
	htmlStr += "</ul>"
	document.querySelector('.js-data').innerHTML = htmlStr;
}

let shoppingList = [];

const shoppingInput = document.querySelector('.js-shopping-list-input');
shoppingInput.addEventListener('keydown', e => {
	if (e.keyCode === 13) {
		e.preventDefault();

		const value = e.target.value;
		const newListItem = newShoppingListItem(value, 0)
		shoppingList = addToShoppingList(newListItem, shoppingList)
		e.target.value = "";
		render();
	}
});

const undoAction = document.querySelector('.js-undo');
undoAction.addEventListener('click', e => {
	e.preventDefault();
	if (shoppingList.length <= 0) {
		alert('nothing to undo!');
		return;
	}
	shoppingList = removeNthItem(shoppingList.length-1, shoppingList);
	render();
})