function solution(A) {
    // initilise the smallest no
    // filter all the nums >= 1
    // in a loop check weather the no is available in the array
    
    let x = 1 // initialise the smallest number first.

// solution 1
===============================
    A.filter(x => x >= 1)
     .sort((a,b) => a - b)
     .map((val,i,arr) =>{
        if(x < arr[i]) return
        x = arr[i] + 1
    })
    return x

    solution 2
===============================
    const set = new Set(A);
    let i = 1;

    while (set.has(i)) {
        i++;
    }
    return i;
===============================
}
