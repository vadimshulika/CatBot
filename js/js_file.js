function getValue(){
  var message = $('.message__input').val().toLowerCase();
  $( ".content" ).append( '<div class="cat_translate input"><div class="message_field">' + $('.message__input').val() + '</div></div>' );
  $('.message__input').val('');
  processing(message);
}
function processing(message){
  ansver = '';
  if (message == 'мяу') {
    ansver = 'Привет';
  }
  if (message == 'мяу мяу' || message == 'мяу-мяу') {
    ansver = 'Хочу кушать';
  }
  if (message == 'мррр') {
    ansver = 'Мне нравится';
  }
  if (message == 'мяяу') {
    ansver = 'Давай игать';
  }
  if (message == 'мяяяу') {
    ansver = 'Мне скучно';
  }
  if (message == 'мр мяу' || message == 'мр-мяу') {
    ansver = 'Кто-то пришёл';
  }
  if (message == 'мррррр') {
    ansver = 'Люблю тебя';
  }
  if (message == 'мррр мяу' || message == 'мррр-мяу') {
    ansver = 'Погладь меня';
  }
  if (message == 'мяяяяу') {
    ansver = 'Выпусти меня';
  }
  if (message == 'мр мр мяу' || message == 'мр-мр-мяу') {
    ansver = 'Дай мячик';
  }
  if (message == 'мяу мяу мяу' || message == 'мяу-мяу-мяу') {
    ansver = 'Хочу на ручки';
  }
  if (message == 'мяу мррр мяу' || message == 'мяу-мрр-мяу') {
    ansver = 'Пошли спать';
  }
  if (message == 'мяяяяу мррр' || message == 'мяяяяу-мррр') {
    ansver = 'Я проснулся';
  }
  if (message == 'шшш') {
    ansver = 'Я злой';
  }
  if (message == 'мяу шшш' || message == 'мяу-шшш') {
    ansver = 'Выпусти меня';
  }
  if (message == 'арррр') {
    ansver = 'Не трогай меня!';
  }
  if(message == 'aрр'){
    ansver = 'Не подходи ко мне!';
  } 
  if(message == 'мр'){
    ansver = 'что?';
  }
  if(message == 'мрр'){
    ansver = 'что такое?';
  } 
  if (ansver == '') {
    ansver = 'На кошачьем языке таких слов нету';
  }
  out(ansver);
}

function out(ansver){
  $( ".content" ).append( '<div class="cat_translate"><div class="message_field">' + ansver + '</div></div>' );
}