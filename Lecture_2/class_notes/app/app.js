const list = ["https://www.google.com", "https://www.nyt.com", "https://www.huffpo.com"]
const randomLink_n = list[Math.floor(Math.random()*list.length)]

const randLink5 = `
<nav>
	<a href="${randomLink_n}">Home</a>
</nav>`


document.querySelector('body').innerHTML = randLink5;