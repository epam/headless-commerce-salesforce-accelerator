This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Configure linter and prettier

Here is described the guide of configuration in VS Code. You have to install 2 plugins (eslint and prettier).

You can lint your code via `npm run lint` command.

#### Add SSL certificate for local development

To perform API requests localy, it is required to use secure connection (HTTPS-like). To enable this on local environments there is a need to install an SSL certificate locally. Please check the following link `https://medium.com/@danielgwilson/https-and-create-react-app-3a30ed31c904` for a guidance.

#### How to use Form Component

First of all you should render `<Form>` component. All inputs should go as a children.

Example of basic usage:

    <Form>
        <Input
    	    id="example"
    	    name="example"
    	    labelName="Example of Input"
    	    required
    	    minLength={2}
    	    maxLength={40}
        />
    </Form>

Required props for `Input` are:

- id
- name
- labelName

For adding some description of your field, pass `info` with information as a string.

For adding an example of the value of your field, pass `exampleDescription` with a description as a string.

For using a regexp, you should pass the pattern as a prop to `Input`.

For setting default values, you should pass an object with these values to `Form` component. Keys in these objects should be the name of your field.

    const defaultValues = {
    	example: "Hello Example"
    }

    <Form defaultValues={defaultValues}>

<Input
    	    id="example"
    	    name="example"
    	    labelName="Example of Input"
    	    required
    	    minLength={2}
    	    maxLength={40}
   	    />

</Form>

For validation we use a yup, so you should create a validationSchema and put it as a prop to `Form` component:

    const schema = yup.object().shape({
        example: yup.number().required().positive().integer(),
    });

    <Form validationSchema={schema}>

<Input
    	    id="example"
    	    name="example"
    	    labelName="Example of Input"
    	    required
    	    minLength={2}
    	    maxLength={40}
   	    />

</Form>

`<Form>` also requires a `handleSubmit` function as a prop, so you should pass it too. When `handleSubmit` will be called, you will take a params data with all information about inputs value

    const handleSubmit = (data) => console.log(data.example) // you will get a value of this field

      <Form validationSchema={validationSchema} handleSubmit={handleSubmit}>
       	    <Input
       	    id="example"
       	    name="example"
       	    labelName="Example of Input"
       	    required
       	    minLength={2}
       	    maxLength={40}
       	    />
        </Form>
