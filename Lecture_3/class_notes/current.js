const shopping_list = [
	3.36,
	4.64,
	1.00,
	2.00,
]; // 10


// const totalCost = shopping_list[0] + shopping_list[1] + shopping_list[2]+ shopping_list[3]
// console.log(totalCost)

let i = 0;
let totalCost = 0
while (i < 4) {
	console.log('\t\ttotalCost + shopping_list['+i+']', totalCost + shopping_list[i])
	console.log('\t\tshopping_list['+i+']', shopping_list[i])
	console.log('\t\ttotalCost is', totalCost)
	totalCost = totalCost + shopping_list[i]
	i = i + 1;
	console.log('\t\ttotalCost is now ----------------- ', totalCost)
}