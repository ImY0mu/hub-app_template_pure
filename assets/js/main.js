// Change this
window.extension = {
  name: 'hub-app_template_pure',
  title: 'App Template',
  version: '0.0.1',
  author: 'Y0mu'
};

// Set up the application's name so all the functions at extension_api work
window.extension_api.set_app_name(window.extension.name);

console.log(`%cWelcome to ${extension.title} v${extension.version} created by ${extension.author}`, 'color: #3f97bf; background: transparent; font-size: 18px; padding: 0.5rem;');


/*
  Create simple logging  - log(type, message)
  Supported types: info, error
*/
window.log = (type, message) =>{
  window.extension_api.log(type, message);
};

