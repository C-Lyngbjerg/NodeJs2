const failures = ["mislick", "falling down", "skateboard accident", "tiktok fail"];
// const mapfails = failures.map(x => console.log(x));

const failures2 = failures.map((failure) =>{
    return failure;
});

console.log(failures2);



// using filter is preferable to for each and find because foreach
// iterates through the elements while filter returns a new array
// find is not able to do it in one line like filter