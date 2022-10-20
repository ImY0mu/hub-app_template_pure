var player = null;

document.addEventListener("DOMContentLoaded", function(){
  // How to log messages so they appear in App Hubs logs files
  log('info', `Launched ${extension.title} v${extension.version} created by ${extension.author}`);
  log('error', `Hello World!`);

  window.extension_api.get_user();

  window.extension_listener.receive("user", function (player) {
    player = player;
    console.log(player);
  });
  window.extension_listener.receive("public_token", function (token) {
    console.log(token);
  });
  window.extension_listener.receive("user_patreon_data", function (user_patreon_data) {
    console.log(user_patreon_data);
  });
  window.extension_listener.receive("public_token", function (public_token) {
    console.log(public_token);
  });

});


function close_window(){
  window.extension_api.close_window()
}

function minimize_window(){
  window.extension_api.minimize_window()
}

function maximize_window(){
  window.extension_api.maximize_window()
}