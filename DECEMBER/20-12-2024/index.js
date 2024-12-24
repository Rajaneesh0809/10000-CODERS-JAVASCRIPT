console.log("OPERATORS")

console.log("1. What is the result of 10 + '5'?")
console.log(10 + '5') 

console.log("2. What is the value of x after x = 10; x += 5;?")
x2 = 10
x2 += 5
console.log(x2)

console.log("3. What is the result of 10 - null?")
console.log(10 - null)

console.log("4. What is the value of x after x = 10; x *= 2;?")
x4 = 10
x4 *= 2
console.log(x4)

console.log("5. What is the result of 10 / '2'?")
console.log(10 / '2')

console.log("6. What is the result of 10 % 3?")
console.log(10%3)

console.log("7. What is the value of x after x = 10; x = x ** 2;?")
x7 = 10
x7 = x7 ** 2
console.log(x7)

console.log("8. What is the result of 10 > 5 && 5 < 10?")
console.log(10 > 5 && 5 < 10)

console.log("9. What is the result of 10 === '10'?")
console.log(10 === '10')

console.log("10. What is the result of null ?? 'default'?")
console.log(null ?? 'default')

console.log("11. What is the result of 10 || 'default'?")
console.log(10 || 'default')

console.log("12. What is the result of !true?")
console.log(!true)

console.log("13. What is the result of 10 & 5?")
console.log(10 & 5)

console.log("14. What is the result of 10 | 5?")
console.log(10 | 5)

console.log("15. What is the result of 10 ^ 5?")
console.log(10 ^ 5)

console.log("What is the result of x = 10; y = ++x;?")
x16 = 10
console.log("x = " + x16)
y16 = ++x16
console.log("y = ", y16)
console.log("x = " + x16)

console.log("2. What is the result of x = 10; y = x++;?")
x17 = 10
console.log("x = " + x17)
y17 = x17++
console.log("y = ", y17)
console.log("x = " + x17)

console.log("3. What is the result of x = 10; console.log(++x);?")
x18 = 10
console.log(++x18)

console.log("4. What is the result of x = 10; console.log(x++);?")
x19 = 10; 
console.log(x19++);

console.log("5. What is the result of x = 10; y = --x;?")
x20 = 10; 
console.log("x = " + x20)
y20 = --x20;
console.log("y = ", y20)
console.log("x = " + x20)

console.log("6. What is the result of x = 10; y = x--;? What are the values of x and y?")
x21 = 10;
console.log("x = " + x21)
y21 = x21--;
console.log("y = ", y21)
console.log("x = " + x21)

console.log("Ternary Operators:")

console.log("1. What is the result of x = 10; y = x > 5 ? 'yes' : 'no';? What is the value of y?")
x22 = 10
console.log("x = " + x22)
y22 = x22 > 5 ? 'yes' : 'no'
console.log("y = " + y22)

console.log("3. What is the result of x = 10; y = x > 5 ? 'yes' : x > 3 ? 'maybe' : 'no';?What is the value of y?")
x23 = 10
console.log("x = " + x23)
y23 = x23 > 5 ? 'yes' : x23 > 3 ? 'maybe' : 'no'
console.log("y = " + y23)

console.log("Optional Chaining:")

console.log("1. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.b);?")
const obj1 = {
    a: {
        b: 'c'
    }
}
console.log(obj1?.a?.b)

console.log("2. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.c);?")
const obj2 = {
    a: {
        b: 'c'
    }
}
console.log(obj2?.a?.c)

console.log("3. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.b?.c);?")
const obj3 = {
    a: {
        b: 'c'
    }
}
console.log(obj3?.b?.c)

