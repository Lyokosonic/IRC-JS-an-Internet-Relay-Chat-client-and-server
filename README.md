# TchatBoc - Epitech IRC Project

Build a Web application with Angular, and communicate the data using the NodeJS server.

## Installation

* Install [NodeJS LTS](https://nodejs.org/) version.
* Install Python version 2.7 (Not the version 3.7 !)
* Install MongoDB 4.2
* Clone the Github repository

```
cd TchatBox
```

## The TchatBox Client

### Start the web server

First, go to the **TchatBox** folder and install the node packages:
```
npm install
```

Next, build the sources with:
```
npm run build
```

After, start the web server with:
```
npm start
```

## The TchatBox Server

### Configuration

There is one template provided : **src/assets/.env-template**.

Copy the template in the **TchatBox-server** at the root.

Rename it to **.env**.

Edit this file, you will set revelant config data in it.

## Start the server

First, go to the **TchatBox-server** folder and install the node packages:
```
npm install
```

Next, build the sources with:
```
npm run build
```

After, start the server with:
```
npm run dev
```

To start the server in developpment:
```
npm run watch
```
