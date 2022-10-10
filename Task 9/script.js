/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie{
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }    
    wasExpensive() {
        return this.budget > 100000000;
    }
}

// create movie object
const fastAndFurious = new Movie("Fast & Furious", "Rob Cohen", 85000000)
const titanic = new Movie("Titanic", "James Cameron", 2000000000)

// grazina false and true
console.log(fastAndFurious.wasExpensive())
console.log(titanic.wasExpensive())