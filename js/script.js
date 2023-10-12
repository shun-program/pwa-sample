let isOnline;
isOnline = navigator.onLine;

if(isOnline === true){
  document.querySelector(".results").innerHTML = "インターネットに接続中です";
  document.getElementById("offline").style.display = "none";

}else{
  document.querySelector(".results").innerHTML = "インターネットから切断されました";
  document.getElementById("online").style.display = "none";
}