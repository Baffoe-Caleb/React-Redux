// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// ------
// STEP 1
// ------
//
// Create and configure an apisauce-based api object.
//
const api = apisauce.create({
	// base URL is read from the "constructor"
	baseURL: "https://api.chucknorris.io/jokes/",
	// here are some default headers
	headers: {
		'Cache-Control': 'no-cache'
	},
	// 10 second timeout...
	timeout: 10000
})

// ------
// STEP 2
// ------
//
// Define some functions that call the api.  The goal is to provide
// a thin wrapper of the api layer providing nicer feeling functions
// rather than "get", "post" and friends.
//
// I generally don't like wrapping the output at this level because
// sometimes specific actions need to be take on `403` or `401`, etc.
//
// Since we can't hide from that, we embrace it by getting out of the
// way at this level.
//
// const setAuthToken = (userAuth) => api.setHeader('Authorization', 'Bearer ' + userAuth)
// const removeAuthToken = () => api.deleteHeader('Authorization')
// const getOauthInfo = () => api.get('api/v1/auth-info')
// const getOauthIssuerInfo = (issuerUrl) => api.get(`${issuerUrl}/.well-known/openid-configuration`)

const getCategoryList = () => api.get('categories')
const getRandomJokes = () => api.get('random')
const getRandomCategoryJoke = (category) => api.get('random?category=' + category)
const getListOfJokes = (query) => api.get('search?query=' + query)
// ignite-jhipster-api-method-needle

// ------
// STEP 3
// ------
//
// Return back a collection of functions that we would consider our
// interface.  Most of the time it'll be just the list of all the
// methods in step 2.
//
// Notice we're not returning back the `api` created in step 1?  That's
// because it is scoped privately.  This is one way to create truly
// private scoped goodies in JavaScript.
//
export {
	// a list of the API functions from step 2

	// ignite-jhipster-api-export-needle
	// setAuthToken,
	// removeAuthToken,
	getCategoryList,
	// getOauthInfo,
	// getOauthIssuerInfo,
	getRandomCategoryJoke,
	getRandomJokes,
	getListOfJokes,

}
