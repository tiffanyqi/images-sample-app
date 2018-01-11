# Images

## A sample environment for engineers to practice integrating Mixpanel identity management, events, and people properties

- Images app with basic login, signup, and logout flow
- Allows a user to continuously get more images

## Setup

### Set up a virtual environment for the app to run in
- Install [virtualenv](https://virtualenv.pypa.io/en/stable/) if you haven't already, which allows us to run our app on our machines. Run `pip install virtualenv` in the Terminal.
- Create a folder, navigate into that folder, and create a virtual environment for our new sample app by running `virtualenv images` in the Terminal, which creates a new virtual environment called “images”.
- Run the virtual environment by calling `source images/bin/activate` in the Terminal in the same directory as your images folder. When it’s successful, you should see (images) to the left of your current directory.

### Download the sample app
- Click the Clone or Download menu to show the directory of the repo. To make a clone of this repo, go to your desktop or wherever you place these projects, and run `git clone git@github.com:tiffanyqi/images-sample-app.git` in the Terminal. This creates a new folder called “images-sample-app” with all of the app code! Be sure this is outside of the images environment folder you created in the previous step.
- Note: If you see an error that says something like “Could not read from remote repository. Please make sure you have the correct access rights and the repository exists” -- this could mean that you do not have an SSH key saved on your local machine. Follow the instructions [here](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) to create a new SSH key.

### Set up the app by downloading the packages that the app uses
- Navigate into the images-sample-app folder, and run `pip install -r requirements.txt` to install all the requirements necessary to run the app
- Note: if you get an error related to egg-info,  you may need to install Postgresql using Homebrew (while pip is a package manager that can be used to install python files, [Homebrew](https://brew.sh/) is a different package manager that you can use to install OSX packages) -- enter  `brew install postgresql` into the terminal
- You may also have to run `PATH=$PATH:/Applications/Postgres.app/Contents/Versions/9.3/bin pip install psycopg2`
	Run the app on a local server!
- Run `python manage.py runserver`, which allows the app to run in your browser.
- Note! : If you need to stop and run the app again later in the future, make sure to set up the virtual environment again (c) before running the app on the server (f-g).
- Go to your web browser and type in localhost:8000. The app should work successfully!

## Mixpanel Practice
- Initialize / insert Mixpanel into the sample app (make sure you have downloaded this app and that it runs) 
- Track events with event properties client-side (follow the chart below, and add any other event and event properties as you deem necessary. Do not use Autotrack)
- Track events with event properties server-side (follow the chart below, and add any other event and event properties as you deem necessary)
- Track people profiles with people properties (follow the chart below, and add any other people property you deem necessary)
- Reset the distinct_id upon logout
- Integrate identity management with server-side alias and identify client-side, and alias the username to the client-side distinct_id
- Pass the distinct_id from the client to the server and vice versa

