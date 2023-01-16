const emojiCalled=this.document.getElementById('bt3')
emojiCalled.addEventListener('click',moodSwing)
function moodSwing()
{
  let emo=randomgenerator(07,18);
  let emoji="&#1285"+emo
  emojiCalled.display = emoji;
  document.getElementById('emoji').innerHTML = emoji;
}
function randomgenerator(min,max){
  return Math.floor(Math.random()*(max-min)+min)
}
