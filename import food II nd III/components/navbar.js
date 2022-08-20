 function navbar (){
    return `
    <h3>
            <a href="/">Home</a>
        </h3>
        <div id="options">
            <h3><a href="signup.html">signup</a></h3>
            <h3><a href="login.html" id="logSec">Log In</a></h3>

        <h3><a href="searchRecipe.html">Search recipe by name</a></h3>


            <h3>
                <a href="getRecipe.html">Recipe Of The Day</a>
            </h3>
            <h3>
                <a href="randomreci.html">show random receipes</a>
            </h3>
        </div>
    `;
}

export default navbar;