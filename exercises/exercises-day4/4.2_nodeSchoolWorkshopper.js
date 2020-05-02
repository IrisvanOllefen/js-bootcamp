/* I followed the exercises from nodeSchool Workshopper about scope, chain and closures. 
This is what I ended up with.
*/

// EXERCISE 1 - SCOPE

function foo() {
    var bar;

}

// EXERCISE 2 - MULTIPLE NESTED SCOPES

function foo() {
    var bar;
    function zip() {
        var quux;
    }
}

// EXERCISE 3 - GLOBAL SCOPE

function foo() {
    var bar;
    quux = 20;
    function zip() {
        var quux = 2;
    }
}

// EXERCISE 4 - CLOSURES

function foo() {
    var bar;
    quux = 20;

    function zip() {
        var quux = 2;
        bar = true;
    }
    return (zip);
}
