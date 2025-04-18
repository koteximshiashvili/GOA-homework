fetch("https://jsonplaceholder.te.com/users").then(res => { // აქ ვიყენებტ fetchს რომ საიტიდან გამოვიტანოთ ინფორმაცია
    console.log(res)
    if (res.status === 404){ // შემდეგ ვამოწმებთ იმას თუ შედეგი რაც გამოვიდა ამის სტატუსი არის 404
        document.body.style.background = "url('https://cdn.discordapp.com/attachments/1237784686269304932/1346553213083586711/Screenshot_2025-01-19_at_22.11.54.png?ex=67c89ae7&is=67c74967&hm=b3d07a8c650ce8ff1c49e692a3efd7ff75fe26fc387f409988624c34273ff9eb&')"; // თუ ასეა მაშინ ვუცვლით ბოდის ბექგრაუნდ იმეჯს
        return Promise.reject("Error 404");
    }
    else if(res.ok){ // აქ ვამოწმებთ თუ შედეგი რაც გამოვიდა ამის ok ფუნქციას რომელსაც გამოაქვს ან true ან false
        document.body.style.background = "green"; // თუ true არის მაშინ ბოდის ვუცვლით ბექგრაუნდს
    }
    else if(res.status >= 300 && res.status <= 310){ // აქ ვამოწმებტ თუ შედეგი რაც გამოვიდა ამის სტატუსი არის 300სა და 310ს შორის
        document.body.style.background = "blue"; // თუ ასეა მაშინ ბოდის ვუცვლით ბექგრაუნდს
    }
    else if (!res.ok){ // აქ ვამოწმებთ თუ შედეგი რაც გამოვიდა ამის ok ფუნქციას გამოაქვს false
        throw new Error("ERROR. STATUS CODE: " + res.status) // თუ ასეა მაშინ ვაგდებთ ერორს
    }
    return res.json() // სხვა შემთხვევაში ვაბრუნებთ მიღებული შედეგის json ფუნქციას რომელიც გარდაქმნის შედეგს ლისთად
    }).then(res => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'; // აქ ვქმნით ანბანის ცვლადს
    let names = '' // აქ ვქმნით ცვლადს სახელებს
    for(let i = 0; i < alphabet.length; i++){ // აქ ვუვლით ანბანის ცვლადს
        res.forEach(user => { // აქ ვუვლით მიღებულ შედეგს 
            if (user.name[0].toLowerCase() === alphabet[i]){ // აქ ვამოწმებთ თუ user ობიექტის ნეიმი დაპატარავებული იწყება ალფაბეტის i ინდექსზე
                names += user.name + ', '; // თუ ასეა ნეიმებს ვუმატებთ ნეიმს და მძიმეს
            };
        });
    };
    document.querySelector('.names').innerHTML += names; // და საბოლოოდ გამოგვაქ საიტზე ეს ნეიმები
});