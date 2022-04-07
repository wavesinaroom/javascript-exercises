const getTheTitles = function(books) {

  let titles = new Array(books.length);

  for (var i = 0; i < books.length; i++) {
    titles[i]=books[i].title;
  }

  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
