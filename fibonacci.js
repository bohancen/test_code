// 1,1,2,3,5,8,13,21....
const f_num = 40
// 递归次数
let fn_count = 0

// 递归
function fibonacci_a(n) {
    fn_count++
    if (n < 1) return 0;
    if (n <= 2) return 1;
    return fibonacci_a(n - 1) + fibonacci_a(n - 2)
}
let time_start_a = Date.now()
console.log(fibonacci_a(f_num))
console.log('time_start_a:' + (Date.now() - time_start_a) + 'ms' + ' fn_count:' + fn_count)

// 循环累加
function fibonacci_b(n) {
    let sum = 0
    let last = 1
    // let arr=[]
    for (let i = 1; i <= n; i++) {
        sum += last
        last = sum - last
        // arr.push(sum)
    }
    // console.log(sum,arr)
    return sum;
}
let time_start_b = Date.now()
console.log(fibonacci_b(f_num))
console.log('time_start_b:'+ (Date.now() - time_start_b)+'ms')

