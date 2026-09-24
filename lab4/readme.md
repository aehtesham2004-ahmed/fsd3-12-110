# NPM Project

1. goto project folder (by cd)
2. type `npm init -y`
3. open package.json
4. update `type:module`
5. install nodemon `npm i nodemon -D`
6. update script in package.json
...

script{
    "start": "node app.js",
    "dev": "nodemon prg7
}

7. add node_modules to .gitignore 
8. to run use npm run dev

## REST API
### Representational State Transfer (REST)

- mojorly backend server return only data not html file 
- 

## Request Api
1. GET - get all, get by id 
- /api/products - print all product details
- /api/products/101 - print the products details whose id is 101

2. Post
- /api/products - it add the products  

3. PUT/PATCH
- /api/products/201/
   in echo API body {
    what we have to change 
   }

4. DELETE
- 