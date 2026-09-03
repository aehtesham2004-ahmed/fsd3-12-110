# HTTP (Hpyer Text Transfer Protocol) Module

It is built in Node.js Module which allows developers to create web server and web client without installing any external package.
one of the most important moduule is Node.js orignally designed for building scalable network application adn web servers.

1. create web servers
2. handle client report
3. Bild REST APIs
4. Non-Blocking I/O
5. Foundation of Express.js

There are total 2^32 port in computer server.

#NPM - node package manager =>manage to install/uninstall package through node

npm init -y =>project biolercode
npm i <pakageName> =>install any package
npm uninsatll <pakageName> =>uninstall any package

to run node program => npm start
to run nodeman program => npm run dev

## HTTP status codes -> res.WriteHead( ), res.statusCode

- 200 ->OK
- 201 ->CREATED
- 400 ->BAD REQUEST
- 401 ->UNAUTHORIZED
- 403 ->FORBIDDEN
- 404 ->NOT FOUND
- 500 ->INTERNAL SERVER ERROR
 ### Server can send to the client

1. html contents -> prg2,prg3
2. html file -> prg5
3. json data -> prg4
4. plain file
5. js file 
6. any file to download
7. etc


## Type of information

1. text/html -> for html file/contents
2. text/json -> for json data
3. text/css -> for css file/contents
4. application -> for file 
5. text/plain ->for plain text file

### Note: .gitignor -> this files contains the list of files or folder that is not addded to git. these files/folder will not push on Github 