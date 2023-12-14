# Golang Iberian Script Image Viewer

This project is a simple web application that generates images for each Iberian sscript letter or dual signary in a given word. It's built using Go and JavaScript.

## Features

- Enter a word and generate images for each letter.
- Special handling for certain letters and combinations (e.g., 'ke', 'bi').
- Serves static files (images and JavaScript) from the server.

## How to Run

1. Ensure you have Go installed on your machine.
2. Clone this repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run `go run main.go` to start the server.
5. Open your web browser and navigate to `http://localhost:8080` to view the application.

## Project Structure

- `main.go`: The main Go file that runs the server and handles routes.
- `index.html`: The main HTML file that displays the form and results.
- `js.js`: The JavaScript file that handles form submission and image generation.
- `images/`: The directory where the letter images are stored.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
