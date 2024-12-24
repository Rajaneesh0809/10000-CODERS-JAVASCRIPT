//1.create one user object with details of purchasing a product.
//object should contains --->username,product,price,day,occassion,platform.

//op mahesh has purchased a washingmachine which costs 25000 on monday
//  on occassion of pongal in amazon

user_ip = prompt("Enter Customer's Name: ")
product_ip = prompt(`What did ${user_ip} purchase?`) 
// price_ip = +prompt(`What is the Cost of the ${product_ip}? `) 
day_ip = prompt(`When did ${user_ip} purchase the ${product_ip}?(Please enter day:)`) 
occasion_ip = prompt("What is the Occasion?") 
platform_ip = prompt(`Which platform did the ${user_ip} use?`) 

let prod = {
    user: user_ip,
    product: product_ip,
    price:+prompt(`What is the Cost of the ${product_ip}? `),
    day: day_ip,
    occasion: occasion_ip,
    platform: platform_ip
}

alert(`On ${prod.day}, on the occasion of ${prod.occasion}, ${prod.user} spent ${prod.price} for purchasing a ${prod.product}`)

let job = {
    student: prompt("Enter Student's Name: "),
    company: prompt("What's the Company Name: "),
    ctc: +prompt("Enter the CTC(in LPA): "),
    role: prompt(`Enter the role: `),
    join_date: prompt("Enter joining date: ")
}

alert(`${job.student} got placed in ${job.company} as a ${job.role} with a CTC of ${job.ctc} LPA and joining from ${job.join_date}`)
