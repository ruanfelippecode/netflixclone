# netflixclone by ruanfelippecode.

The website is deployed in the following link:
https://netflixclone-three-beta.vercel.app

Overview:
A small and simple clone of the homepage of Netflix, developed with ReactJS, JavaScript, CSS3.
An interaction with the TheMovieDB API was also used. With TheMovieDB API, film descriptions, cover images, etc were obtained.
This project is 100% responsive, although, different buttons could be used for interactions with mobile device screens.
The entire program was built to be demonstrated in Portuguese, which is my mother language.

I will only document about the API search specifically, as the rest of the files are easy to 
read and understand, mainly, the UX/UI part.

tmdb.js:
Within this file, all interaction with TheMovieDB API is carried out.
I was interested in making this interaction with the API within a separate file so that it would be easier to maintainance, 
in a hypothetical future, for example, if TMDB launches a more complete API, it would be easier to access, 
modifying just one file , rather than the entire structure of the program.
Another hypothetical situation, is if the TMDB API becomes unavailable, I can switch to another database, without major problems, as long as the original data structure is maintained.
 The getHomeList async function is a function that searches the API for all the lists we need, 
separately, and returns it to the program.
 The basicFetch async constant is an auxiliary function, which will search the target url, and will return the JSON result, 
it is a function that will repeat itself to all objects in the getHomeList function.
P.S: all necessary data about TMDB can be accessed directly in their own documentation at https://developer.themoviedb.org/
