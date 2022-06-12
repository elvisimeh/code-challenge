//PREP

// 1 to num(loop), divisible by 3 print fizz, by 5 buzz, 3&5 fizzbuzz
// P : num, int, +
// R : console
// E

function fizzBuzz(num){
    for(let i=1; i <= num; i++ ){
        if(i % 3 == 0 && i % 5 ==0){
            console.log('fizzbuzz')
        }
        else if(i % 3 ==0){
            console.log('fizz')
        }
        else if(i % 5 ==0){
            console.log('buzz')
        }
        else{
            console.log(i)
        }
    }
}

fizzBuzz(5) // 1,2,fizz,4,buzz
fizzBuzz(15) // 1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz