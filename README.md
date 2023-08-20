# Flatacuties - Vote for the Cutest Animal!

Flatacuties is a mini web app where you can vote for the cutest animal. It demonstrates array iteration, DOM manipulation, events handling, and server communication using a local API.


## Project Setup

To get started with Flatacuties, follow these steps:

1. **Clone the Repository:** Clone this GitHub repository to your local machine.

2. **Install Dependencies:** No external dependencies are required for this project.

3. **Start the Local Server:**
   - Create a `db.json` file in the project root directory and populate it with the provided character data.
   - Open a terminal and navigate to the project root directory.
   - Run the following command to start the JSON DB server:
     ```sh
     json-server --watch db.json
     ```
   - You can test the server by visiting `http://localhost:3000/characters` in your browser.

4. **Open the App:** Open the `index.html` file in a modern web browser to start using the Flatacuties app.

## Features

- View a list of all animal names.
- Click on an animal's name to see its details, including the image and number of votes.
- Vote for your favorite animal, and the vote count will be displayed in real-time.
- Add new animals using the provided form.


# Adding New Animals
1. Open the app in your web browser.
2. Scroll down to the "Add New Animal" section.
3. Fill in the name and image URL of the new animal.
4. Click the "Add Animal" button to add the new animal to the list.
5. The new animal will appear in the list, and you can click on its name to view details and vote.

## Technologies Used

- HTML
- CSS
- JavaScript

## Project Structure

- `index.html`: The main HTML file containing the app structure.
- `styles.css`: The CSS file for styling the app.
- `script.js`: The JavaScript file for handling data fetching, DOM manipulation, and event handling.

## Usage

1. Open the app in your web browser.
2. You will see a list of animal names. Click on a name to view the animal's details.
3. In the details view, you can vote for the animal by clicking the "Vote" button. The vote count will update instantly.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.

## Acknowledgments

- This project was created as a practice exercise to learn about array iteration, DOM manipulation, events, and server communication.

---

