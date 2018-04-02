var i = 1;
  function func()
                {
    var message = "Welcome to Cozy Crumbs!";
    if( i <= message.length )
      {
    var txt = message.substring(0,i);
    document.getElementById("hid") .innerHTML = txt;
    setTimeout("func()", 100);
      i++;
        }else{
          i = 1;
          document.getElementById("hid") .innerHTML = "";
          setTimeout("func()", 100);

          }

          }

          func();
