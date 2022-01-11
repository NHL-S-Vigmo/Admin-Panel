# NHL-S-Vigmo Admin Panel
_This project works with the [NHL-S-Vigmo Api](https://github.com/NHL-S-Vigmo/Api), which is a project for the Advanced Java Minor and is made by Students. The Admin Panel will allow the teachers to manage the digital dashboard in the aula_

![dashboard-example](docs/img/dashboard-example.png?raw=true "Dashboard Example")

# Installation
The installation guide is written with in mind that you have a windows computer with a windows operating system.

To install the Admin Panel correctly, you should first follow the installation steps of the [Api Repository](https://github.com/NHL-S-Vigmo/Api#how-to-install). Once you have installed the [Api Repository](https://github.com/NHL-S-Vigmo/Api#how-to-install), run the webserver and mysql server. After following the [Api Repository](https://github.com/NHL-S-Vigmo/Api#how-to-install) steps you have to make sure you have installed the latest LTS version of `nodejs`. You can do this by downloading and installing this via [this installation link](https://nodejs.org/en/download/). Once you have everything installed, you can begin to install the Admin Panel.  

Start by downloading the project and saving it to your new favourite folder. Once you have installed the project open a terminal at the root path of the Admin Panel project. You can quickly do this by typing `cmd` in the navigation bar and pressing `enter`.

![open-cmd-help](docs/img/open-cmd-help.png?raw=true "Open CMD")

With the open cmd tab (where the path should end with the name of your favourite root folder where you installed the project) type the following command: `npm install` and pressing `enter`. This may take a minute or two. 

## Configuration
To setup the project, we need to set some configuration values in order to work correctly. These values have to be stored in an `.env` file.
- Create your own `.env` file in the root map
- Set the values from the example below according to your environment.
  ```
  REACT_APP_DATA_URL=http://localhost:6965
  REACT_APP_AUTH_URL=${REACT_APP_DATA_URL}/authenticate
  ```
- Save the file

The `REACT_APP_DATA_URL` is the url where the api is served. The `REACT_APP_AUTH_URL` is the route where the application wants to authenticate the user. For most instances you dont have to change the authentication url.

## Run the project
After installing the project, start the Admin Panel by typing the following command: `npm start` and pressing `enter`. This can also take a minute or two. When this is finished, your browser should automatically pop up and redirect you to the login screen [http://localhost:3000/](http://localhost:3000/#/login).

![login-screen](docs/img/login-screen.png?raw=true "Login Screen")
