const insert = (c)=>{
  if (typeof(Storage) !== "undefined"){
    localStorage.menu=c;
  }
  else{
    console.log("your browser does not support localstorage");
  }
}

const setpage = (c)=> {
  insert(c);
  location.href = "menu.html";
}

