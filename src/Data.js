import one from "./images/one.jpg"
import two from "./images/two.jpg"
import three from "./images/three.jpg"
import four from "./images/four.jpg"
import five from "./images/five.jpg"
import six from "./images/six.jpg"
import seven from "./images/seven.jpg"
import eight from "./images/eight.jpg"
import nine from "./images/nine.jpg"
import ten from "./images/ten.jpg"
import eleven from "./images/eleven.jpg"
import twelve from "./images/twelve.jpg"
import thirteen from "./images/thirteen.jpg"
import fourteen from "./images/fourteen.jpg"
import fifteen from "./images/fifteen.jpg"

const data = [
    {
      question:
        "What was the name of the Pygmy Puff Ginny bought from Weasleys’ Wizard Wheezes?",
      image:one,
      answers: ["Barry", "Arnold", "Hugo", "Craig"],
      correct: "Arnold",
      questionId: "1"
    },
    {
      question:
        "In Order of the Phoenix, what three things are scattered on the floor of the Knight Bus when Harry, Ron and Hermione are heading back to Hogwarts?",
      image:two,
      answers: ["Egg shells,bat wings and digestive biscuits.", "Cat hair,feathers and cat liter.", "Beetle dung,dead wasps and bourbon biscuits.", "Frogspawn,cockroaches and custard creams."],
      correct: "Frogspawn,cockroaches and custard creams.",
      questionId: "2"
    },
    {
      question:
        "What are the names of Severus Snape's parents?",
      image:three,

      answers: ["Tobias Snape and Eileen Prince", "Theodore Snape and Ethel Prince", "Tripp Snape and Eliana Prince", "Toby Snape and Ellen Prince"],
      correct: "Tobias Snape and Eileen Prince",
      questionId: "3"
    },
    {
      question: "What was the codename that Fred was mistakenly called on Potterwatch?",
      image:four,
      answers: [
        "Rabbit",
        "Rodent",
        "Rapier",
        "Rattlesnake"
      ],
      correct: "Rodent",
      questionId: "4"
    },
    {
      question: "How many exceptions are there to Gamp’s Elemental Law?",
      image:five,
      answers: ["Four", "Five", "Seven", "Three"],
      correct: "Five",
      questionId: "5"
    },
    {
      question: "What colour eyes does Winky the house-elf have?",
      image:six,
      answers: ["Emerald", "Dark Brown", "Light Brown", "Hazel"],
      correct: "Dark Brown",
      questionId: "6"
    },
    {
      question: "What do Blast-Ended Skrewts look like to Harry?",
      image:seven,
      answers: ["Eels with humpbacks and legs", "Mouthless snakes with hands", "Overcooked and slimy prawns", "Deformed,shell-less lobsters"],
      correct: "Deformed,shell-less lobsters",
      questionId: "7"
    },
    {
      question: "What is the name of the Bulgarian Minister for Magic?",
      image:eight,
      answers: ["Nedyalko", "Oblansk", "Desislav", "Tsvetan"],
      correct: "Oblansk",
      questionId: "8"
    },
    {
      question: "What type of hat was Elphias Doge wearing at Bill and Fleur’s wedding?",
      image:nine,
      answers: ["A suspiciously stained wizard's hat", "A battered bowler hat", "A tatty top hat", "A moth-eaten fez"],
      correct: "A moth-eaten fez",
      questionId: "9"
    },
    {
      question: "Who gave Ambrosius Flume, the manager of Honeydukes Sweetshop, his first job?",
      image:ten,
      answers: ["Horace Slughorn", "Florean Fortescue", "Ciceron Harkiss", "Luc Millefeuille"],
      correct: "Ciceron Harkiss",
      questionId: "10"
    },
    {
      question: "Who is the author of Unfogging the Future?",
      image:eleven,
      answers: ["Greta Catchlove", "Selina Sapworthy", "Cassandra Vablatsky", "Galatea Merrythought"],
      correct: "Cassandra Vablatsky",
      questionId: "11"
    },
    {
      question: "In the book, what colour were the dress robes that Padma Patil wore to the Yule Ball?",
      image:twelve,
      answers: ["Magenta", "Pink", "Turquoise", "Lime Green"],
      correct: "Turquoise",
      questionId: "12"
    },
    {
      question: "What does Romilda Vane ask Ginny about Harry in Half Blood Prince?",
      image:thirteen,
      answers: ["Whether he looks like a mole without his glasses on", "Whether he has a Hippogriff tattoo", "Whether,when touched,his scar burns", "Whether he is actually the Chosen One"],
      correct: "Whether he has a Hippogriff tattoo",
      questionId: "13"
    },
    {
      question: "Who is the editor of the Daily Prophet?",
      image:fourteen,
      answers: ["Urguhart Rackharrow", "Xenophilius Lovegood", "Broderick Bode", "Barnabus Cuffe"],
      correct: "Barnabus Cuffe",
      questionId: "14"
    },
    {
      question: "Which spell caused Hermione's front teeth to grow rapidly?",
      image:fifteen,
      answers: ["Tarantallegra", "Furnunculus", "Episkey", "Densaugeo"],
      correct: "Densaugeo",
      questionId: "15"
    }


  ];
  
  export default (n = 5) =>
    Promise.resolve(data.sort(() => 0.5 - Math.random()).slice(0, n));