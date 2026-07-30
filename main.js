// What is a callback function?
// A callback function is an anonymou function (no name) that is passed as an argument to another function

// What is Synchronous and Asynchronous code?
// Synchronous stand for events occuring at the same time. In programming, this means execution of code line by line in order.
// Synchronous code is blocking, meaning that the next line of code is not executed until the current line is finished.

// Asynchronous stands for events occuring at different times. In programming, this means you can have code execute out of order in parallel.
// Asynchronous code is non-blocking, meaning that some code is run in the background while the rest of the code is executed.

console.log("Before");

// get a user from the database
function getUser(id, callback) {
  // setTimeout is a function that operates asynchronously
  setTimeout(() => {
    // mock database call
    console.log("Retrieving user with id: " + id);
    // get user from database
    var user = {
      id: id,
      githubUsername: "ShareghYusefi",
    };

    // Once we have our user, we can provide it to the callback function for processing
    callback(user);
  }, 2000);
}

// A callback function takes the result of an asynchronous operation and does something with it.
// In this case, we are passing a function that takes the user object and logs it to the console.
getUser(1, (user) => {
  console.log(user);
});

console.log("After");
