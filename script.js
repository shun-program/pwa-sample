const isOnline = navigator.onLine;

if(isOnline === true){
  document.querySelector(".results").innerHTML = "インターネットに接続中です";
   $('.offline').hide();

}else{
  document.querySelector(".results").innerHTML = "インターネットから切断されました";
  $('.online').hide();
}