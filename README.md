<img src="https://cdn.dribbble.com/users/470545/screenshots/2153975/face-morphing.gif" width="300"/>

## Face Morphing (Client Side Script) - See Server Side [Here](https://github.com/tarunnsingh/morph-server).

## Project Demo :nerd_face:

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/_ThVHciEj4g/0.jpg)](http://www.youtube.com/watch?v=_ThVHciEj4g)

### What is Morphing? :thinking:

The face morphing algorithm morphs between faces using a common set of feature points, placed by hand on each face. To morph between two faces, you need to warp both faces to a common shape so they can be blended together.

### About this Client Side Repo :monocle_face:

This will run only when you are up and running the server.

### Uses:

1. **FilePond**: FilePond provides a smooth UX for uploading and kind of files. A wrapper built for ReactJS makes our job easy.
2. **Material UI**: Provides easy styling functionalities to React components.

### Requirements:

- **Nodejs**: [Node.js](https://nodejs.org/dist/latest-v8.x/docs/api/) is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Docker**: [Download Docker and Docker Compose](https://docs.docker.com/get-docker/) is an open platform for developing, shipping, and running applications.
  For Windows and Mac, it's recommended to get the `Docker Desktop` app.

  - Docker Engine Version: v19.03.8

### Run Locally: :rocket:

1. [Important] Before running this client side script, make sure you have started your server succesfully. Check Steps in the [SERVER](https://github.com/tarunnsingh/morph-server) repo.
2. Now clone this repo to any other location than that of the server.
3. If in the Server Side steps you changes the PORT number then update it in package.json -> PROXY. Otherwise leave it as is.
4. Install dependecies with `npm install`.
5. Run the script with `npm start`.
6. Go to ```http://localhost:3000" in browse to test the project.

### Run using Docker. :rocket:

1. Go to the root folder of the project.
2. Build the Docker image with this command: `docker build -t morph-client .`
3. Once it finishes building, run the following command to start `docker run -itd -p [appPort]:[containerPortToExpose] morph-client:latest`.

- **Note:** the `appPort` is the one where the application would be listening to, and the `containerPortToExpose` is the one that would be visible outside the container. Eg: `3000:3000`

### Contribute

Check and put up Issues and let me know the features which you wish to add before making a PR.

### Leave a :star: if you found this helpful.
