# How to run Project

in the root folder which is same directory with package.json, you can run `npm install`
After the necessary node packages has been installed, You can run the project with `npm start`

## How to run with Docker
in the root folder which is same directory with 'Dockerfile'
`docker build -t invent-fe-case .`
`docker run -p 3000:3000 invent-fe-case .`

You will be able to reach the application from [http://localhost:3000](http://localhost:3000)
