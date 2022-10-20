# SimpleMMO App Hub extension app template

Pure HTML, JS and CSS template to create your own SimpleMMO App and run it inside the [App Hub](https://github.com/ImY0mu/SimpleMMO-Hub-Dist).

```js
// Update this to the manifest json information
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
```

## Get started

Follow these steps to get started with this template:

1. Click the **[Use this template](https://github.com/ImY0mu/hub-app_template_pure/generate)** button (you must be logged in) or just clone this repo.
2. The application's folder has to be at the `AppData\Roaming\SimpleMMO Hub v2\extensions` and share the same name as in `public/manifest.json`.
3. Open the folder of the project and update `package.json`, `public/manifest.json` and `assets/js/main.js` with your application's information.
4. Launch App Hub (version 0.0.45 or newer)
5. Navigate to Extensions and your application should show up there.
6. Launch it.
7. Reload the window by pressing CTRL + R whenever you make any change.

## Manifest

```json
{
  "name":"hub-app_template_pure", 
  "title":"App Template",
  "author":"Y0mu",
  "in_development":false,
  "description":"Template of application for SimpleMMO App Hub.",
  "version":"0.0.1",
  "preview_image_url":"",
  "github":{
     "owner":"ImY0mu",_
     "repository":"hub-app_template_pure",
     "link_to_repository":"https://github.com/ImY0mu/hub-app_template_pure"
  }
}
```

**Required:**

- name: It has to have the name of the folder
- title: Title of the extension in the list of extensions
- author: Name of the author
- in_development:
  - true: extension will be loaded from from it's `dist` folder within the selected folder
  - false: extension will be loaded right from the selected folder
- version: Version number
- github:
  - owner: Name of the github profile
  - repository: Name of the repository where you make releases
    - Keep **in_development** to true if the whole code is part of your releases and not just the `dist` folder
  - link_to_repository: Link to the repository

**Not Required:** (for now)

- description: Description of the extension
- preview_image: Eventually could be an image of the preview within the hub

That's all you need.
