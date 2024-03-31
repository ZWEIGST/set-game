function gameOne() {
    let number = prompt('Введите номер месяца, от 1 до 12:');

    if (number === '12' || number === '1' || number === '2') {
        alert('Зима');
        } else if (number === '3' || number === '4' || number === '5'){
        alert('Весна');
        } else if (number === '6'|| number === '7'|| number === '8'){
        alert('Лето');
        }else if (number === '9'|| number === '10'|| number === '11'){
        alert('Осень');
        } else { 
        alert('Месяцы закончились! Попробуй другое число')
    }
}


function gameTwo() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    alert ('Я покажу массив, состоящий из фруктов, запомни его: '  + words);
    let question1 = prompt('Чему равнялся первый элемент массива?');
    let question2 = prompt('Чему равнялся последний элемент массива?');
    
    let answer1 = words[0];
    let answer2 = words[6];
    
    if (question1.toLowerCase() === answer1.toLowerCase() && question2.toLowerCase() === answer2.toLowerCase()) {
        alert('Поздравляю, Вы угадали все элементы!');
    } else if (question1.toLowerCase() === answer1.toLowerCase() || question2.toLowerCase() === answer2.toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert('Упс, провал. Попробуйте еще раз!');
    } 
}

function gameThree() {

    let puzzleAnswer;
 
    puzzleAnswer = prompt('Отгадайте загадку: когда она садится — они встают. Кто "она" и кто "они"?');
    
    
    if (puzzleAnswer.toLowerCase() === 'батарейка и часы' || puzzleAnswer.toLowerCase() === 'батарейка, часы' || puzzleAnswer.toLowerCase() === 'батарейка; часы' || puzzleAnswer.toLowerCase() === 'батарейка. часы' || puzzleAnswer.toLowerCase() === 'батарейка.часы') {
        alert('Поздравляю, это правильный ответ!');
    
    
    } else {
    alert('Есть ещё попытка'); 
    

        puzzleAnswer = prompt('Отгадайте загадку: когда она садится — они встают. Кто "она" и кто "они"?' + '\n' +    'Первая подсказка: оба находятся, наверное, в каждом доме.');
        
        if (puzzleAnswer.toLowerCase() === 'батарейка и часы' || puzzleAnswer.toLowerCase() === 'батарейка, часы' || puzzleAnswer.toLowerCase() === 'батарейка; часы' || puzzleAnswer.toLowerCase() === 'батарейка. часы' || puzzleAnswer.toLowerCase() === 'батарейка.часы') {
            alert('Поздравляю, это правильный ответ!');
        } else {
        alert('Есть ещё одна попытка'); 


            mysteryAnswer = prompt('Отгадайте загадку: когда она садится — они встают. Кто "она" и кто "они"?' + '\n' + 'Вторая подсказка: раньше вместо "неё" "они" были с кукушкой.'); 

            if (puzzleAnswer.toLowerCase() === 'батарейка и часы' || puzzleAnswer.toLowerCase() === 'батарейка, часы' || puzzleAnswer.toLowerCase() === 'батарейка; часы' || puzzleAnswer.toLowerCase() === 'батарейка. часы' || puzzleAnswer.toLowerCase() === 'батарейка.часы') {
                alert('Поздравляю, это правильный ответ!');
                
            } else {
                alert('К сожалению, загадка не разгадана. Попробуйте ещё раз.');
            }
        }
    }
}