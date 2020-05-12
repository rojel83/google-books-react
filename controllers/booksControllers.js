const db = require("../models");
const axios = require("axios");

// "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes"

module.exports = {

    // function to use API from backend
    searchApi: (req, res) => {

        axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers")
            .then((response) => res.json(response.data))
            .catch(err => res.status(422).json(err))

    },