function increase(number, callback) {
    setTimeout(() => {
        const result = number + 10;
        if (callback) {  // if 안에 콜백있는데 이러면 함수는 실행이 안되나?? 콘솔창에 왜 한번만 나옴??  // 인자가 없어서?? 
            callback(result)
        }
    }, 3000)
}

increase(0, result => {
    console.log(result)
})

