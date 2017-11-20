//Good luck! Maybe start by making that fetch request ;) https://codepen.io/model3volution/pen/aVVrrY
const fetch = require('isomorphic-fetch');
const TRIVIA_URL = "https://opentdb.com/api.php?amount=10&category=18";

const getQuestions = (url)=>{
    return fetch(url)
    .then(res=>res.json())
    .then(data=>data.results);
};

const replaceQuotes = questions => {
    return questions.map(result=>{
        result.question = result.question.replace(/&quot;/g, '"'); 
        return result;
    });
};

const filterDifficulty = (questions, difficulty = "easy") => {
    return questions.filter(
        result=>result.difficulty==difficulty);
};

const sortDifficulty = questions => {
    return [...questions].sort((a, b) => a.difficulty > b.difficulty ? 1: -1);
};

const tally = questions => {
    return questions.reduce((acc,cur)=>{
        if (cur.difficulty in acc){
            acc[cur.difficulty] += 1;
        }
        else {acc[cur.difficulty] = 1;}
        return acc;
    },{});
};

const ifAllComputers = (questions, category = 'Science: Computers') => {
    return questions.every(result => result.category == category);
};

const sortMediumByType = questions => {
    return questions.filter(result=>result.difficulty == "medium")
    .sort((a,b) => a.type > b.type ? 1: -1);
};

const actualQuotes = getQuestions(TRIVIA_URL).then(replaceQuotes);

const easyQuestions = getQuestions(TRIVIA_URL).then(filterDifficulty);

const sortedByDifficulty = getQuestions(TRIVIA_URL).then(sortDifficulty);

const countByDifficulty = getQuestions(TRIVIA_URL).then(tally);

const allComputers = getQuestions(TRIVIA_URL).then(ifAllComputers);

const sortedMedium = getQuestions(TRIVIA_URL).then(sortMediumByType);

// To check from console, do: actualQuotes.then(data => console.log(data));
