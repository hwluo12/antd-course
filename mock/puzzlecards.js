const random_jokes = [
  {
    setup: "What is the object oriented way to get wealthy ?",
    punchline: "Inheritance"
  },
  {
    setup: "To understand what recursion is...",
    punchline: "You must first understand what recursion is"
  },
  {
    setup: "What do you call a factory that sells passable products?",
    punchline: "A satisfactory"
  }
];

let random_joke_call_count = 0;

export default {
  "get /api/random_joke": (req, res) => {
    const responseObj =
      random_jokes[random_joke_call_count % random_jokes.length];
    random_joke_call_count += 1;
    setTimeout(() => {
      let random_number = Math.random();
      if (random_number > 0.5) {
        res.json(responseObj);
      } else {
        res.status(500);
        res.json({});
      }
    }, 1000);
  }
};
