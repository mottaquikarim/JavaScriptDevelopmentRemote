(function() { // protect the lemmings!

	/* 1
		@function newShoppingListItem
		@param item {string}
		@param price {number}
		@returns {object}
		@description
			given an item and a price, return
			an object that looks like this:
			{
				'item': 'eggs',
				'price': 1.59
			}
			OPTIONAL:
				- validate that item is string
					and price is number
					if invalid, throw error
			OPTIONAL:
				- validate that item has fewer than 10 characters
				- validate that price is less than 100 and has only
					two decimal places
	*/

	// implement function here

	// const newShoppingListItem = (item, price) => {
	// 	return {
	// 		'item': item,
	// 		'price': price,
	// 	}
	// }

	const newShoppingListItem = (item, price) => {
		return {item, price,}
	}

	// const newShoppingListItem = (item, price) => ({item, price,})
	const item = newShoppingListItem('eggs', 1.59)
	console.log(item)

	// TEST
	describe('1. newShoppingListItem', () => {
		it('should return an object with item and price attributes', () => {
			const shoppingListItem = newShoppingListItem('test', 1)

			chai.assert.equal(shoppingListItem.item, 'test');
			chai.assert.equal(shoppingListItem.price, 1);
		});
	});


	/* 2
		@function addToShoppingList
		@param item {object}
		@param list {array, []}
		@returns list
		@description
			add shoppinglist item object (ie:
				{
					'item': 'eggs',
					'price': 1.59
				}
			) to a list
			list is to DEFAULT to []
			OPTIONAL:
				- validate that the item is indeed a shoppingList item
				- if shoppingList item is not passed in, throw error
	*/

	// implement function here
	// const addToShoppingList = (item, list = []) => {
	// 	list.push(item)
	// 	return list;
	// }

	const validateItem = item => {
		if (typeof item.item === "undefined" || typeof item.price === "undefined") {
			throw new Error('item is invalid')
		}
	}

	const addToShoppingList = (item, list = []) => {
		validateItem(item);
		return list.concat([item]);
	}


	let mylist = [ newShoppingListItem('orange juice', 3.52) ]
	mylist = addToShoppingList( newShoppingListItem('egg', 1.59), mylist )
	console.log(mylist)

	// addToShoppingList({
	// 	foo:1, 
	// 	bar: 2
	// });

	// TEST
	describe('2. addToShoppingList', () => {

		it('should return a list', () => {
			const newList = addToShoppingList({
				'item': 'test',
				'price': 1
			});
			chai.assert.equal(newList.length, 1)
		});

		it('should have one item that is a shopping list object', () => {
			const newList = addToShoppingList({
				'item': 'test',
				'price': 1
			});
			chai.assert.equal(newList[0].item, 'test');
			chai.assert.equal(newList[0].price, 1);
		})
	});

	/* 3
		@function removeFromShoppingList
		@param list {array, []}
		@returns list
		@description
			if array is empty, return it immediately
			if array has items, remove the LAST item
				and then return the array
	*/

	// implement function here
	const removeFromShoppingList = (list = []) => {
		if (list.length === 0) {
			return list;
		}

		return list.slice(0, -1);
	}

	// TEST
	describe('3. removeFromShoppingList', () => {
		it('should remove from the end of the list', () => {
			let list = addToShoppingList({
				'item': 'test',
				'price': 1
			});
			list = addToShoppingList({
				'item': 'test2',
				'price': 2
			}, list);

			// actually test function now
			list = removeFromShoppingList(list);

			chai.assert.equal(list.length, 1)
			// asert only item in list is 'test' with price 1
			chai.assert.equal(list[0].item, 'test')
			chai.assert.equal(list[0].price, 1)
		})
	});

	/* 4
		@function removeFirstItem
		@param list {array, []}
		@returns list
		@description
			if array is empty, return it immediately
			if array has items, remove the FIRST item
				and then return the array
	*/

	// implement function here

	// TEST
	describe('4. removeFirstItem', () => {
		it('should remove from the end of the list', () => {
			let list = addToShoppingList({
				'item': 'test',
				'price': 1
			});
			list = addToShoppingList({
				'item': 'test2',
				'price': 2
			}, list);
			list = removeFirstItem(list);

			chai.assert.equal(list.length, 1)
			// asert only item in list is 'test2' with price 2
			chai.assert.equal(list[0].item, 'test2')
			chai.assert.equal(list[0].price, 2)
		})
	});

	/* 5
		@function removeNthItem
		@param i {number}
		@param list {array, []}
		@returns list
		@description
			given `i`, an index < length of list
			remove that item from list and return the
			resulting list
			if...
				- what if `i` > length of list
				- `i` is < 0
				- `i` is not number
			^^ return error
	*/

	// implement function here

	// TEST
	describe('5. removeNthItem', () => {
		it('should remove i-th item from list', () => {
			let list = addToShoppingList({
				'item': 'test',
				'price': 1
			});
			list = addToShoppingList({
				'item': 'test2',
				'price': 2
			}, list);
			list = addToShoppingList({
				'item': 'test3',
				'price': 3
			}, list);


			list = removeNthItem(1, list);

			chai.assert.equal(list.length, 2)

			chai.assert.equal(list[0].item, 'test')
			chai.assert.equal(list[0].price, 1)

			chai.assert.equal(list[1].item, 'test3')
			chai.assert.equal(list[1].price, 3)
		});

		it('should throw error if i < 0', () => {
			// if i < 0
			chai.assert.throws(() => {
				removeNthItem(-1, [])
			}, Error);
		});

		it('should throw error if i > length of list', () => {
			// if i > length of array
			chai.assert.throws(() => {
				removeNthItem(1, [])
			}, Error);
		});

		it('should throw error if i is not a number', () => {

			// if i is not a number
			chai.assert.throws(() => {
				removeNthItem('adfas', [])
			}, Error);
		})
	});

	/* 6
		@function removeNItems
		@param i {number}
		@param num {number}
		@param list {array, []}
		@returns list
		@description
			same as above but now we wish to remove ALL
			items from i to i+num and return the resulting list
			if...
				- `i` < 0
				- `i` or `num` is not a number
				- `i+num` > length of list
				- `num` > length of list
			^^ return error
	*/

	// implement function here

	// TEST
	describe('6. removeNItems', () => {
		it('should remove i-th item from list', () => {
			let list = addToShoppingList({
				'item': 'test',
				'price': 1
			});
			list = addToShoppingList({
				'item': 'test2',
				'price': 2
			}, list);
			list = addToShoppingList({
				'item': 'test3',
				'price': 3
			}, list);


			list = removeNItems(1, 1, list);

			chai.assert.equal(list.length, 1)

			chai.assert.equal(list[0].item, 'test')
			chai.assert.equal(list[0].price, 1)
		});

		it('should throw error if i + num < 0', () => {
			// if i < 0
			chai.assert.throws(() => {
				removeNItems(-1, 0, [])
			}, Error);
		});

		it('should throw error if i + num > length of list', () => {
			// if i > length of array
			chai.assert.throws(() => {
				removeNItems(1, 2, ['a', 'b'])
			}, Error);
		});

		it('should throw error if i is not a number', () => {

			// if i is not a number
			chai.assert.throws(() => {
				removeNItems('adfas', 1, [])
			}, Error);
		})

		it('should throw error if num is not a number', () => {

			// if i is not a number
			chai.assert.throws(() => {
				removeNItems(1, 'asasdfa', [])
			}, Error);
		})

		it('should throw error if num > length of list', () => {

			// if i is not a number
			chai.assert.throws(() => {
				removeNItems(1, 8, [])
			}, Error);
		})
	});

	/* 7
		@function smartRemoveItems
		@param i {number}
		@param list {array, []}
		@returns list
		@description
			- if `i` is < 0, remove i number of items
				from END of list
			- if `i` > length of list, return list immediately
			- if `i` > 0 remove i number of items
				from START of list
	*/

	// implement function here

	// TEST
	describe('7. smartRemoveItems', () => {
		it('should return list if i > length of list', () => {
			let list = [];
			list = smartRemoveItems(1, list);

			// [] is initial state of list
			// we expect `list` to also be length 0
			// ...or, empty essentially
			chai.assert.equal(list.length, 0);
		});

		it('should remove i number from end of list if i < 0', () => {
			let list = addToShoppingList({
				'item': 'test',
				'price': 1
			});
			list = addToShoppingList({
				'item': 'test2',
				'price': 2
			}, list);
			list = addToShoppingList({
				'item': 'test3',
				'price': 3
			}, list);

			list = smartRemoveItems(-1, list);

			chai.assert.equal(list.length, 2)
			chai.assert.equal(list[0].item, 'test')
			chai.assert.equal(list[0].price, 1)
			chai.assert.equal(list[1].item, 'test2')
			chai.assert.equal(list[1].price, 2)
		});

		it('should remove i number from START if list if i > 0', () => {
			let list = addToShoppingList({
				'item': 'test',
				'price': 1
			});
			list = addToShoppingList({
				'item': 'test2',
				'price': 2
			}, list);
			list = addToShoppingList({
				'item': 'test3',
				'price': 3
			}, list);

			list = smartRemoveItems(1, list);

			chai.assert.equal(list.length, 2)
			chai.assert.equal(list[0].item, 'test2')
			chai.assert.equal(list[0].price, 2)
			chai.assert.equal(list[1].item, 'test3')
			chai.assert.equal(list[1].price, 3)
		});
	});

	/* 8
		@function spliceItem
		@para item {object}
		@param i {number}
		@param list {array, []}
		@returns list
		@description
			- item must be an object that looks like this:
			{
				'item': 'eggs',
				'price': 1.59
			} (else throw error)
			- insert item into the ith index of the list
			- if i > length of list, just append
			- if i < 0, just prepend
	*/

	// implement function here

	// TEST
	describe('8. spliceItem', () => {
		it('should throw an error if item is not valid', () => {
			chai.assert.throws(() => {
				spliceItem('invalidItem', 0, [])
			}, Error);
		});

		it('should insert item to the ith index of the list', () => {
			const list = spliceItem({
				'item': 'test',
				'price': 1,
			}, 0, [])

			chai.assert.equal(list[0].item, 'test')
			chai.assert.equal(list[0].price, 1)
		});

		it('should append to the end if i > length of list', () => {
			const list = spliceItem({
				'item': 'test',
				'price': 1,
			}, 9, [{
				'item': 'test0',
				'price': 0,
			}])

			chai.assert.equal(list[1].item, 'test')
			chai.assert.equal(list[1].price, 1)
		});

		it('should prepend if i < 0', () => {
			const list = spliceItem({
				'item': 'test',
				'price': 1,
			}, -1, [{
				'item': 'test0',
				'price': 0,
			}])

			chai.assert.equal(list[0].item, 'test')
			chai.assert.equal(list[0].price, 1)
		});

	});

	/* 9
		@function spliceItems
		@param items {list}
		@param i {number}
		@param list {array, []}
		@returns list
		@description
			- *EACH* item in `items` must be an object
			that looks like this:
			{
				'item': 'eggs',
				'price': 1.59
			} (else throw error)
			- insert items into the ith index of the list
			- if i > length of list, just append
			- if i < 0, just prepend
			- if `items` is empty, return list
	*/

	// implement function here

	// TEST
	describe('9. spliceItems', () => {
		it('should throw an error if item is not valid', () => {
			chai.assert.throws(() => {
				spliceItems([{
					'item': 'test',
					'price': 1,
				},'invalidItem'], 0, [])
			}, Error);
		});

		it('should insert items to the ith index of the list', () => {
			const list = spliceItems([{
				'item': 'test',
				'price': 1,
			}, {
				'item': 'test2',
				'price': 2,
			}], 0, [{
				'item': 'test3',
				'price': 3,
			}])

			chai.assert.equal(list[0].item, 'test')
			chai.assert.equal(list[0].price, 1)
			chai.assert.equal(list[1].item, 'test2')
			chai.assert.equal(list[1].price, 2)
		});

		it('should append to the end if i > length of list', () => {
			const list = spliceItems([{
				'item': 'test',
				'price': 1,
			}], 9, [{
				'item': 'test0',
				'price': 0,
			}])

			chai.assert.equal(list[1].item, 'test')
			chai.assert.equal(list[1].price, 1)
		});

		it('should prepend if i < 0', () => {
			const list = spliceItems([{
				'item': 'test',
				'price': 1,
			}], -1, [{
				'item': 'test0',
				'price': 0,
			}])

			chai.assert.equal(list[0].item, 'test')
			chai.assert.equal(list[0].price, 1)
		});

		it('should return list if items is empty', () => {
			const list = spliceItems([], 0, []);
			chai.assert.equal(list.length, 0)
		})
	});

	/* 10
		@function combineLists
		@param items1 {list}
		@param items2 {list}
		@returns list
		@description
			given two lists of items
			- *EACH* item in `items` must be an object
			that looks like this:
			{
				'item': 'eggs',
				'price': 1.59
			} (else throw error)
			- return ONE list that contains items in
			items1 THEN items in items2 as a single array
	*/
	const combineLists = (items1, items2) => {
		const newArr = [];
		for(let i = 0; i < items1.length; i++) {
			validateItem(items1[i]);
			newArr.push(items1[i])
		}
		for(let j = 0; j < items2.length; j++) {
			validateItem(items2[j]);
			newArr.push(items2[j])
		}
		return newArr;
	}

	// const combineLists2 = (items1, items2) => {
	// 	return items1.concat(items2)
	// }

	// implement function here

	// TEST
	describe('10. combineLists', () => {
		it('should throw an error if item is not valid', () => {
			chai.assert.throws(() => {
				combineLists([{
					'item': 'test',
					'price': 1,
				},'invalidItem'], [{
					'item': 'test2',
					'price': 2,
				}])
			}, Error);
		});

		it('should return single list with items of both lists', () => {
			const list = combineLists([{
					'item': 'test',
					'price': 1,
				}], [{
					'item': 'test2',
					'price': 2,
				}]);

			chai.assert.equal(list[0].item, 'test')
			chai.assert.equal(list[0].price, 1)
			chai.assert.equal(list[1].item, 'test2')
			chai.assert.equal(list[1].price, 2)
		});
	});

	/* 11
		@function splitListAt
		@param i {number}
		@param list {array, []}
		@returns list
		@description
			given a number i that is within bounds of
			`list`, break it into two lists where
			`list1` has all items less than or equal to i
			and `list2` has all items > i
			- if `i` < 0, `list1` has all items and `list2`
				is empty list
			- if `i` > length of list, list1 is empty and `list2`
				has all items

			- always return a list that looks like this:
				[list1, list2]

	*/

	// implement function here

	// TEST
	describe('11. splitListAt', () => {
		it('should break list into two at index', () => {
			const [list1, list2] = splitListAt(1, [{
					'item': 'test',
					'price': 1,
				}, {
					'item': 'test2',
					'price': 2,
				}]);

			chai.assert.equal(list1[0].item, 'test')
			chai.assert.equal(list1[0].price, 1)
			chai.assert.equal(list1[1].item, 'test2')
			chai.assert.equal(list1[1].price, 2)
			chai.assert.equal(list2.length, 0)

		});

		it('should put all items into list1 if i < 0', () => {
			const [list1, list2] = splitListAt(-1, [{
					'item': 'test',
					'price': 1,
				}, {
					'item': 'test2',
					'price': 2,
				}]);

			chai.assert.equal(list1[0].item, 'test')
			chai.assert.equal(list1[0].price, 1)
			chai.assert.equal(list1[1].item, 'test2')
			chai.assert.equal(list1[1].price, 2)
			chai.assert.equal(list2.length, 0)

		});

		it('should put all items into list2 if i > length of list', () => {
			const [list1, list2] = splitListAt(100, [{
					'item': 'test',
					'price': 1,
				}, {
					'item': 'test2',
					'price': 2,
				}]);

			chai.assert.equal(list1.length, 0)
			chai.assert.equal(list2[0].item, 'test')
			chai.assert.equal(list2[0].price, 1)
			chai.assert.equal(list2[1].item, 'test2')
			chai.assert.equal(list2[1].price, 2)


		});

		it('should return two lists', () => {
			const [list1, list2] = splitListAt(1, [{
					'item': 'test',
					'price': 1,
				}, {
					'item': 'test2',
					'price': 2,
				}]);

			chai.assert.isArray(list1)
			chai.assert.isArray(list2)
		})

	});

	/* 12
		@function canExpressCheckout
		@param list {array, []}
		@returns {boolean}
		@description
			if there are fewer than 10 items
			in list, return true
	*/

	// implement function here

	// TEST
	describe('12. canExpressCheckout', () => {
		it('should return true if num items < 10', () => {
			chai.assert.equal(canExpressCheckout([{
					'item': 'test',
					'price': 1,
				}, {
					'item': 'test2',
					'price': 2,
				}]), true);
		})
	});

	/* 13
		@function computeSum
		@param list {array, []}
		@returns {number}
		@description
			given a list of objects that look like this:
			{
				'item': 'eggs',
				'price': 1.59
			}
			- sum all the price items and return value
	*/

	// implement function here
	// const computeSum = (list = []) => {
	// 	let n = 0;
	// 	for(let i = 0; i < list.length; i++) {
	// 		n += list[i].price;
	// 	}
	// 	return n;
	// }

	const computeSum = (list = []) => {
		return list.reduce((n, currentItem) => {
			return n + currentItem.price;
		}, 0);
	}

	const computeSum = (list = []) => list.reduce((n, currentItem) => n + currentItem.price, 0)

	// TEST
	describe('13. computeSum', () => {
		it('should return sum of all item prices in array', () => {
			const sum = computeSum([{
					'item': 'test',
					'price': 1,
				}, {
					'item': 'test2',
					'price': 2,
				}]);

			chai.assert.equal(sum, 3);
		});
	});

	/* 14
		@function computeSumWithTax
		@param list {array, []}
		@param taxRate {number, 8.125}
		@returns {number}
		@description
			given a list of objects that look like this:
			{
				'item': 'eggs',
				'price': 1.59
			}
			- sum all the price items and return value AND
				apply tax value
			- note that tax is passed in as percent not decimal

	*/

	// implement function here

	// TEST
	describe('14. computeSumWithTax', () => {
		it('should return sum of all item prices in array + taxes', () => {
			const sum = computeSumWithTax([{
					'item': 'test',
					'price': 1,
				}, {
					'item': 'test2',
					'price': 2,
				}], 10);

			// stupid hack to prevent the 3.3000000000000003 error...
			chai.assert.equal(Math.floor(100*sum)/100, 3.3);
		});
	});

	/* 15
		@function computeSumInRange
		@param i {number}
		@param j {number}
		@param list {array, []}
		@returns {number}
		@description
			given a list of objects that look like this:
			{
				'item': 'eggs',
				'price': 1.59
			}
			- sum all the price items FROM start index `i` and
				end index `j` and return value
			- if i > j, throw error
			- if i or j not in range, throw error
	*/

	// implement function here

	// TEST
	describe('15. computeSumInRange', () => {
		it('should throw error if i > j', () => {
			chai.assert.throws(() => {
				computeSumInRange(100, 1, [])
			}, Error)
		})

		it('should throw error if i < 0', () => {
			chai.assert.throws(() => {
				computeSumInRange(-1, 1, [])
			}, Error)
		})

		it('should throw error if i > length of list', () => {
			chai.assert.throws(() => {
				computeSumInRange(100, 101, [])
			}, Error)
		})

		it('should throw error if j < 0', () => {
			chai.assert.throws(() => {
				computeSumInRange(0, -1, [])
			}, Error)
		})

		it('should throw error if j > length of list', () => {
			chai.assert.throws(() => {
				computeSumInRange(0, 100, [])
			}, Error)
		})

		it('should sum all the price items FROM start index `i` and end index `j` and return value', () => {
			const sum =  computeSumInRange(1, 3, [
				newShoppingListItem('test', 1),
				newShoppingListItem('test2', 2),
				newShoppingListItem('test3', 3),
				newShoppingListItem('test4', 4)
			]);

			chai.assert.equal(sum, 9)
		})
	});

})();
