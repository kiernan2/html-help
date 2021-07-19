$(document).ready(function() {
  const tags = ["h1", "p", "img"];
  tags.forEach(function (element) {
    $(element).click(function () {
      alert("This is a " + element + " tag.");
    });
  });
});