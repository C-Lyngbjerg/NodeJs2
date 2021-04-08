// callback hell - callback functions can get very 'nested' aka pyramids of doom

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I'm so happy!");
//     }, 2000);
// }).then(message => {
//     console.log(message);
// });

function myPromise(){
    return new Promise((resolve, reject) => {
        try {
             resolve("im indifferent.");
        } catch {
             reject("im sad");
        }
     });
}
(async function myAsyncFunction() {
     try{
         const msg = await myPromise();
         console.log(msg);
    } catch (errorMessage) {
         console.log(errorMessage);
    }
    // .then(message => console.log(message))
    // .catch(errorMessage => console.log(errorMessage));
})();

// myAsyncFunction();

// new Promise((resolve, reject) => {
//     resolve("im indifferent.");
// }).then(message => {
//     console.log(message);
// });