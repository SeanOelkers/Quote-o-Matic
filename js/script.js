$('#getNewQuote').click(function() {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
    .done(update)
    .fail(handleErr);
});

function update(response) {
  $('#theQuote').html(response['quoteText']);
  if(response['quoteAuthor'] == "") {
    response['quoteAuthor'] = 'anonymous';
  }
  $('#theAuthor').html(response['quoteAuthor']);
  document.getElementById('theLink').href=response['quoteLink'];
  var strippedQuote = escape(response['quoteText']);
  var strippedAuthor = escape(response['quoteAuthor']);
  document.getElementById('tweetMe').href="https://twitter.com/share?url=" + response['quoteLink'] + "&related=SeanOelkers&text=" + strippedQuote + "-%20" + strippedAuthor + "&hashtags=QoM"
}

function handleErr(jqxhr, textStatus, err) {
  console.log("Request Failed: " + textStatus + ", " + err);
}

$(document).ready(function () {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
    .done(update)
    .fail(handleErr);
});