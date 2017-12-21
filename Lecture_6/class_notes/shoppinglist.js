// implementation for shopping list
let list = [];
const addToList = (listSoFar, item) => {
	listSoFar.push(item);

	return listSoFar;	
}
const displayList = (listSoFar) => {
	let str = '';
	for (let i = 0; i < listSoFar.length; i++) {
		str += (i+1) + '. ' + listSoFar[i] + '\n';
	}
	return str;

	/*
	return listSoFar.map(i => {
		return (i+1) + '. ' + listSoFar[i];
	}).join('\n')
	*/
}

console.log(list)
list = addToList(list, 'mangoes')
list = addToList(list, 'guava')

console.log(displayList(list));

// USE objects to organize a selection
// of functions under one theme
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
	}
};

ShoppingList.addToList('coffee')
ShoppingList.addToList('mangoes')
console.log(ShoppingList.displayList());
console.log(ShoppingList.list)

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












