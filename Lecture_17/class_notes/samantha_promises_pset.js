/*
    @TODO: read the following instructions before you begin!
    
    For each of the following functions, create an equivalent function that
    implements the same functionality but with promises
    
    Demonstrate that both implementations work equivalently by invoking
    both the promise and non-promise functions
*/

/* 1 ******************************************/

const rollDie = (runFuncWhenComplete) => {
    setTimeout(() => {
        runFuncWhenComplete(Math.floor(Math.random() * 6) + 1) 
    }, 500)
};


const rollDiePromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 6) + 1) 
        }, 500) 
    });
};

// console.log("/* 1 ******************************************/");
// console.log('rolling die...')
// rollDie((dieRolledValue) => {
//     console.log(dieRolledValue);
// });

// console.log('rolling die as promise...')
// rollDiePromise().then(dieRolledValue => {
//     console.log('promise value: ', dieRolledValue)
// });


/* 2 ******************************************/

const xhrReq = (url, onSuccess, onFail) => {
    const ajaxCall = new XMLHttpRequest();
    ajaxCall.open('GET', url);
    ajaxCall.onload = onSuccess;
    ajaxCall.onerror = onFail;
    ajaxCall.send();
}

const xhrReqPromise = (url) => {
    return new Promise((resolve, reject) => {
        const ajaxCall = new XMLHttpRequest();
        ajaxCall.open('GET', url);
        ajaxCall.onload = resolve;
        ajaxCall.onerror = reject;
        ajaxCall.send();
    });
}


// console.log("/* 2 ******************************************/");
// xhrReq(
//     "https://api.giphy.com/v1/gifs/random?api_key=syP7w6LxYPKIJiQ8sP7lH5X7PsMqqAhC",
//     (e) => {
//         console.log("success", e.target.responseText)
//         xhrReq(
//             "https://api.giphy.com/v1/gifs/random?api_key=syP7w6LxYPKIJiQ8sP7lH5X7PsMqqAhC",
//             (e) => {
//                 console.log("success", e.target.responseText)
//                 xhrReq(
//                     "https://api.giphy.com/v1/gifs/random?api_key=syP7w6LxYPKIJiQ8sP7lH5X7PsMqqAhC",
//                     (e) => {
//                         console.log("success", e.target.responseText)
//                     },
//                     (err) => {
//                         console.log("error", err)
//                     }
//                 );
//             },
//             (err) => {
//                 console.log("error", err)
//             }
//         );
//     },
//     (err) => {
//         console.log("error", err)
//     }
// );

// xhrReqPromise("https://api.giphy.com/v1/gifs/random?api_key=syP7w6LxYPKIJiQ8sP7lH5X7PsMqqAhC")
//     .then(e => {
//         console.log('promise success', e.target.responseText)
//         return xhrReqPromise("https://api.giphy.com/v1/gifs/random?api_key=syP7w6LxYPKIJiQ8sP7lH5X7PsMqqAhC");
//     })
//     .then(e => {
//         console.log('promise success', e.target.responseText)
//         return xhrReqPromise("https://api.giphy.com/v1/gifs/random?api_key=syP7w6LxYPKIJiQ8sP7lH5X7PsMqqAhC");
//     })
//     .then(e => {
//         console.log('promise success', e.target.responseText)
//         return xhrReqPromise("https://api.giphy.com/v1/gifs/random?api_key=syP7w6LxYPKIJiQ8sP7lH5X7PsMqqAhC");
//     })
//     .then(e => {
//         console.log('promise success', e.target.responseText)
//         return xhrReqPromise("https://api.giphy.com/v1/gifs/random?api_key=syP7w6LxYPKIJiQ8sP7lH5X7PsMqqAhC");
//     })
//     .catch(err => {
//         console.log('promise failure', err)
//     })

// let prom = xhrReqPromise("https://api.giphy.com/v1/gifs/random?api_key=syP7w6LxYPKIJiQ8sP7lH5X7PsMqqAhC")
// for (let i = 0; i < 10; i++) {
//     prom = prom.then(e => {
//         console.log(i, 'promise success', e.target.responseText)
//         return xhrReqPromise("https://api.giphy.com/v1/gifs/random?api_key=syP7w6LxYPKIJiQ8sP7lH5X7PsMqqAhC");
//     })
// }
// prom.then(e => {
//     console.log('done!')
// })


/* 3 ******************************************/

const rollDieEvensOnly = (onSucc, onFail) => {
    rollDie(d => {
        if (d % 2 === 0) {
            onSucc(d)
        }
        else {
            onFail(d)
        }
    })
}


const rollDieEvensOnlyPromise = () => {
    return new Promise((resolve, reject) => {
        rollDie(d => {
            if (d % 2 === 0) {
                resolve(d)
            }
            else {
                reject(d)
            }
        })  
    })
};


// rollDieEvensOnly((rolledDieValue) => {
//     console.log('success', rolledDieValue)
// },  (rolledDieValue) => {
//     console.log('error', rolledDieValue)
// });

// rollDieEvensOnlyPromise()
//     .then(d => {
//         console.log('promise success', d)
//         return rollDieEvensOnlyPromise();
//     })
//     .then(d => {
//         console.log('second promise success', d)
//     })
//     .catch(err => console.log('promise error', err))


/* 4 ******************************************/

const rollDieThreeSeq = (onSucc) => {
    rollDie(d => {
        rollDie(e => {
            rollDie(f => {
                onSucc(d,e,f)
            })
        })
    })
}

rollDieThreeSeq((d,e,f) =>  console.log(d,e,f))

// const rollDieThreeSeqPromise = () => {
//     const die1 = rollDiePromise();
//     const die2 = rollDiePromise();
//     const die3 = rollDiePromise();
    
//     return Promise.all([die1, die2, die3]);
// }

const rollDieThreeSeqPromise = () => {
    console.log('die1 rolled...')
    const die1 = rollDiePromise();
    const die2 = die1.then(() => {
        console.log('die2 rolled...')
        return rollDiePromise();  
    })
    const die3 = die2.then((die2ResolvedState) => {
        console.log('die3 rolled...')
        return "test " + die2ResolvedState
    });
    
    return Promise.all([die1, die2, die3]);
}

rollDieThreeSeqPromise()
.then(d => {
    console.log(d);
})

/*
    $.ajax({
        method: 'GET',
        url: 'A'
        success: () => {
            $.ajax({
                method: 'GET',
                url: 'B'
                success: () => {
                    
                },
                fail: () => {
                    
                }
            })   
        },
        fail: () => {
            
        }
    })
    
    ajaxPromise('A')
        .then(d => {
        
            return ajaxPromise('B')
        })
        .then()
        
    const login = ajaxPromise('A');
    const userData = login.then(() => {
        return ajaxPromise('B');
    })
    const newsFeed = Promise.all([login, userData]).then((info) => {
        const loginData = info[0]
        const userInfo = info[1]
        return ajaxPromise('C/'+useInfo.id + '/' + loginData.time);
    })
    const notif = newsFeed.then(() => {
        return ajaxPromise('D')
    }''
    
*/

/* 5 ******************************************/

const rollDieThree = (onSucc) => {
    let d;
    let e;
    let f;
    const isUndefined = varToTest => typeof varToTest === "undefined";
    rollDie(die => {
        d = die;
        if (!isUndefined(d) && !isUndefined(e) && !isUndefined(f)) {
            onSucc(d,e,f)
        }
    });
    rollDie(die => {
        e = die;
        if (!isUndefined(d) && !isUndefined(e) && !isUndefined(f)) {
            onSucc(d,e,f)
        }
    });
    rollDie(die => {
        f = die;
        if (!isUndefined(d) && !isUndefined(e) && !isUndefined(f)) {
            onSucc(d,e,f)
        }
    });
}

const rollDieThreePromise = () => {
    const die1 = rollDiePromise().then(d => {
        console.log('ROLLDIETHREEPROMISE: die1 rolled')
        return d;
    });
    const die2 = rollDiePromise().then(d => {
        console.log('ROLLDIETHREEPROMISE: die2 rolled')
        return d;
    });
    const die3 = rollDiePromise().then(d => {
        console.log('ROLLDIETHREEPROMISE: die3 rolled')
        return d;
    });

    return Promise.all([die1, die2, die3]);
}

rollDieThreePromise().then(d => {
    console.log('done')
})








