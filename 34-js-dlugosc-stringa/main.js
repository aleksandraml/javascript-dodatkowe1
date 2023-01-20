const firstText = 'Uwielbiam JavaScript';
const secondText = 'Jestem świetnym programistą';



function texts(str1, str2) {
    if (str1.length < str2.length) {
        return str2
    } else if (str2.length < str1.length) {
        return str1
    }

}


texts(firstText, secondText)
texts('Ulajdilwejhihwi', 'Aleksandra')

console.log(texts(firstText, secondText));
console.log(texts('Ulajdilwejhihwi', 'Aleksandra'));

