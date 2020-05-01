#About ECMAScript and JavaScript Language

##Everything you need to know about ECMAScript

###What is it?
ECMAscript is a standard which JavaScript is based upon. It gets abbreviated to ES fairly often. It was invented by Brendan Eich, who worked at Netscape, which I'll tell more about later.
The interesting thing is that it was made for the Nagivator 2.0 browser, but later started appearing in other browser versions, not only the ones from Netscape.

###What is ECMA International?
ECMA international is a Swiss standards association which is in charge of defining international standards.
They are known for more than providing standards for programming languages, as an example, they are also the ones that made the standard of the QWERTY keyboard.

###ES Versions
There are alot of versions from ECMAScript, currently, most developers work with ES5 and ES6. 
ES5 is the official name for theECMAScript specification update that is published in 2009. 
After ES5 was published, they worked on ES6 which was also named ES2015.
Since people were used to ES5, and ES2015 was not the only known name, people still named it ES6.
Besides a number behind ES, there is also referenced to ES.Next. This basically means the next version of JavaScript. 
At the time that I am writing this, that would be ES2020, but until it is actually published and developers can use it, it gets referred to as ES.Next.

###What is TC39
Every year or so, there is a new version of JavaScript that gets released. 
This is not like an open source project, but is actually the work of a committee. 
This commitee is named TC39 and has a lot of members from various companies that are involved in JavaScript and browser vendors like Mozilla, Google, Facebook, Apple, Microsoft, Intel, PayPal, SalesForce, and others.

##What is JavaScript

###The beginning of JavaScript
Netscape Navigotor was a browser, it was used quite a lot and very popular on the World Wide Web. Around 1995, they introduced JavaScript as a way to add programs to web pages in their browser. 
The one that came up with this was Brendan Eich, who I've mentioned before. It was first made just for Navigator, but after the success it had, other browsers were also using it.

###Why JavaScript
The reason for the name JavaScript, is actually a little funny. It is not named JavaScript per say because of any simalariy with the other programming language Java even though it has some similarity.
It is called JavaScript because they thought it would get some more publicity if the name looked a lot like an existing and popular language that was already used a lot.

###After the Beginning
Eventually, JavaScript was used outside of Netscape. 
This caused a standard document to be written which described the way that the JavaScript language should work. 
This was very convenient, because this made it easier for software that claimed to support JavaScript to actually know what they were talking about when they mentioned support for JavaScript.
A lot of develpers will say that JavaScript is very forgiving. In the book Eloquent JavaScript, the writer actually calls it 'liberal in what it allows'. The idea was that JavaScript should be easy to program in, especially for beginners.

###JavaScript outside of the browser
By now, we can understand that JavaScript runs in a browser. This is a way that I've worked with JavaScript before and a lot of other developers have too. 
But, there is also a way to work with JavaScript on a more backend way, which means not in the browser. 
Databases, like MongoDB and CouchBD use JavaScript as their scripting and query language. 
Another way that JavaScript is usedoutside of the browser, is in Node.js. This uses JavaScript for desktop and server programming.

###JavaScript Syntax Rules
There are quite some rules about how JavaScript should be used. Even though the syntax is a lot, I think it's important to notea few of the most important ones:
*Ever since ES6 was published, it's always better to use common ES6 features like arrow functions, promises, let & const, template literals and spread syntax. This often works better than older ES5 solutions.
*Use lowerCamelCasing for naming variables, and try to always use const if the value will not be reassigned. It it will, use let.
*Use strict equality, so instead of '==', use '===' and instead of '!=', use '!=='.
*Use template literals like the following line: (`Hi! I'm ${myName}!`)
*And of course, make sure code is consise, readable, leave comments where needed and make sure you keep it clear for other people besides yourself.

####Sources for the information I've used for this story:
[Eloquent JavaScript]:https://eloquentjavascript.net/00_intro.html
[ECMAScript Guide]:
[MDN JavaScript Guide]:
[ECMAScript explained by Techopedia]: https://www.techopedia.com/definition/14291/ecmascript
