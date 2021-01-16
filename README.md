## postenv

postenv is a tool helping to inject environment variables into pre-built frontend using env from the system it runs on. It allows us to use the same docker image in all environments (in example staging and production).

Usage of this package with React application consist of four steps. 

### Step 1

Install the tool into your React app:

```sh
npm install postenv
```

### Step 2

Add import script to your page head section, before ReactDOM.render is executed:

```html
    <head>
      ...
      <script src="__postenv.generated.js"></script>
    </head>
```

### Step 3

Use your environment variables where you need it:

```js
import { env } from 'postenv'

console.log(env.POSTENV_BACKEND_URL)
```

### Step 4

Run init binary before you serve the static frontend application, i.e. before serve command:

```json
    "scripts": {
        "serve": "npx postenv init build POSTENV_ && serve -s build"
    }
      
```

The `postenv init` command accepts two arguments. First one is a root directory of your pre-built React application. Second argument is the prefix of the system variables that will be included in the generated env file available in the React application.


___


Check out https://purpledeer.studio

