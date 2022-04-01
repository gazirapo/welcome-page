function welcome() {
  const name = document.querySelector("#myName");
  const newUser = prompt(`Hoşgeldiniz. Adınızı Girin`);

  if (typeof newUser != "string") {
    alert(`Değer Girmediniz`);
    welcome();
    return;
  }
  name.innerHTML = newUser;

  function newClock() {
    let myClock = new Date().toLocaleString();
    document.querySelector("#myClock").innerHTML = myClock;
  }
  setInterval(newClock, 1000);
}
welcome();
