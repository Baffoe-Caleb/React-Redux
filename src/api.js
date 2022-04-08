import apisauce from 'apisauce'

const api = apisauce.create({
	// base URL is read from the "constructor"
	baseURL: "https://api.chucknorris.io/jokes/",
	// here are some default headers
	headers: {
		'Cache-Control': 'no-cache'
	},
	timeout: 10000
})

const getCategoryList = () => api.get('categories')
const getRandomJokes = () => api.get('random')
const getRandomCategoryJoke = (category) => api.get('random?category=' + category)
const getListOfJokes = (query) => api.get('search?query=' + query)

export {
	getCategoryList,
	getRandomCategoryJoke,
	getRandomJokes,
	getListOfJokes,
}
