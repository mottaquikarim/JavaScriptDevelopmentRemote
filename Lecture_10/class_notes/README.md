# Class Notes

**[Samantha Workspace with class notes](http://samantha.fewd.us/#fork/mottaquikarim/JSR_04112018)**

Remember, you can see the files/code listed below by clicking the **`+`** button and then selecting "Open existing file in a new tab"

## main.js
```
const obj = {};
console.log(obj)

const dynKey = 'u';
const obj2 = {
    a: 5,
    '#b': 5,
    [dynKey]: 5,
}
console.log(obj2)

obj[dynKey] = 5;
console.log(obj);

```

## shoppinglist.js
```
// const shoppingList = {
//     list: [],
//     addToList(item) {
//         console.log(item)
//         shoppingList.list.push(item)
//     }
// };

// shoppingList.addToList('test');
// shoppingList.addToList('test2');
// console.log(shoppingList)
let a = 1;
console.log(window.a)


const shoppingListFactory = () => {
    return {
        list: [],
        addToList(item) {
            console.log('this=', this)
            // right now we have no way for
            // us to refer to __this__ object
            // within itself
            this.list.push(item)
        },
        test: () => {
            console.log('invoking test')
            console.log('this=', this)
        }
    };
};

const wholeFoods = shoppingListFactory();
// wholeFoods.addToList('sup');
// wholeFoods.test()

// console.log('wholeFoods is...', wholeFoods)
// const ctown = shoppingListFactory();
// console.log('ctown is...', ctown)


/*
const shoppingListFactory = function() {
	console.log('shoppingListFactory=', this);

// 	return {
		list: [],
		addToList(item) {
			console.log('addToList=', this)
        },
		subObj: {
			test: () => { console.log('test=', this, this.param); },
			test2() {
				console.log('test2=', this, this.param);
            },
			param: 2,
        }
    }
}
const wholeFoods = shoppingListFactory();
wholeFoods.subObj.test()
wholeFoods.subObj.test2()
*/
```

## factories.js
```
const ShoppingListFactory = () => {
    return {
        list: [],
        addToList(item, price) {
            this.list = this.list.concat({item, price});
        },
        removeFromList() {
            this.list = this.list.slice(0, -1)
        },
        total() {
            return this.list.reduce((sum, currentItem) => {
                return sum + currentItem.price;
            }, 0)
        }
    };
};

const ctown = ShoppingListFactory();
ctown.addToList('eggs', 1.79)
ctown.addToList('strawberries', 2.89)
console.log(ctown.total())

const wholeFoods = ShoppingListFactory();

const TodoListFactory = () => {
    return {
        list: [],
        addToList(whatToDo, dueDate, isComplete) {
            this.list = this.list.concat({whatToDo, dueDate, isComplete});
        },
        removeFromList() {
            this.list = this.list.slice(0, -1)
        },
        numCompleted() {
            return this.list.filter((todoItem) => {
                return todoItem.isComplete;
            }).length
        }
    };    
}

const GenericListFactory = () => {
    return {
        list: [],
        removeFromList() {
            this.list = this.list.slice(0, -1)
        },        
    }
}

const ShoppingListFactory2 = () => {
    const base = GenericListFactory();
    return Object.assign({}, base, {
        addToList(item, price) {
            this.list = this.list.concat({item, price});
        },
        total() {
            return this.list.reduce((sum, currentItem) => {
                return sum + currentItem.price;
            }, 0)    
        }
    })
}

const TodoListFactory2 = () => {
    const base = GenericListFactory();
    return Object.assign({}, base, {
        addToList(whatToDo, dueDate, isComplete) {
            this.list = this.list.concat({whatToDo, dueDate, isComplete});
        },
        numCompleted() {
            return this.list.filter((todoItem) => {
                return todoItem['isComplete'];
            }).length
        }
    });    
}




```

