exports.getRandomQuote = (req, res) => {
  
  var Items = [
    {"person":"H. Jackson Brown, Jr.","quote":"Remember that the happiest people are not those getting more, but those giving more."},
    {"person":"Mark Twain","quote":"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do."},
    {"person":"Elanor Roosevelt","quote":"Great minds discuss ideas; average minds discuss events; small minds discuss people."}
  ];
  
  res.send(Items[Math.floor(Math.random()*Items.length)]);
  
};
