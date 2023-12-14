package main

import (
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"github.com/gorilla/mux"
)

const imagePath = "images"

func main() {
	r := mux.NewRouter()

	// Handle the root route, serving the HTML file
	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "index.html")
	})

	// Serve static files (images) from the "images" directory
	r.PathPrefix("/images/").Handler(http.StripPrefix("/images/", http.FileServer(http.Dir(imagePath))))

	// Serve static files (js) from the root directory
	r.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir("./"))))

	// Handle requests to display individual letter images
	r.HandleFunc("/letter/{char}", func(w http.ResponseWriter, r *http.Request) {
		vars := mux.Vars(r)
		char := strings.ToLower(vars["char"])
		filePath := filepath.Join(imagePath, char+".png")

		// Check if the letter image exists
		if _, err := os.Stat(filePath); err != nil {
			http.Error(w, fmt.Sprintf("Image for %s not found", char), http.StatusNotFound)
			return
		}

		// Display the letter image
		http.ServeFile(w, r, filePath)
	})

	fmt.Println("Server is running on http://localhost:8080")
	http.ListenAndServe(":8080", r)
}
