//Find the sum of first 4 natural numbers using callback functions and promises (also with async/await)


//using call back function

function sumOfFirstNNumbers(n, callback) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    callback(sum);
}

sumOfFirstNNumbers(4, function(result) {
    console.log('Sum using callback:', result); 
});

//using  promises

function sumOfFirstNNumbersWithPromise(n) {
    return  Promise((resolve, reject) => {
        if (n < 0) {
            reject('Number should be a positive integer');
        }
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        resolve(sum);
    });
}

sumOfFirstNNumbersWithPromise(4)
    .then(result => {
        console.log('Sum using promises:', result); 
    })
    .catch(error => {
        console.log(error);
    });



    //using  async/wait

    async function sumOfFirstNNumbersAsync(n) {
        if (n < 0) {
            throw new Error('Number should be a positive integer');
        }
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
    
    (async () => {
        try {
            const result = await sumOfFirstNNumbersAsync(4);
            console.log('Sum:', result); 
        } catch (error) {
            console.log(error);
        }
    })();
    

