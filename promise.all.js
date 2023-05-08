Promise.all_new = function (promises) {
    let arr = []
    let count = 0
    return new Promise((resolve, reject) => {
        promises.forEach((item, i) => {
            Promise.resolve(item).then(res => {
                arr[i] = res
                count += 1
                if (count === promises.length) {
                    resolve(arr)
                }
            }, reject)
        })
    })
}

Promise.all_new2 = function (promises) {
    let arr = []
    let count = 0
    return new Promise((resolve, reject) => {
        for (var i = 0; i < promises.length; i++) {
            (function(i){
                Promise.resolve(promises[i]).then(res => {
                    arr[i] = res
                    count += 1
                    if (count === promises.length) {
                        resolve(arr)
                    }
                }, reject)
            })(i)
        }
    })
}