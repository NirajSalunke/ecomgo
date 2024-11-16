package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/NirajSalunke/ecomgo/config"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	defer config.CloseDB()

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, World!")
	})

	log.Printf("Server starting on port %v...\n", os.Getenv("PORT"))
	err1 := http.ListenAndServe(":"+os.Getenv("PORT"), nil)
	if err1 != nil {
		log.Fatalf("Error starting server: %v", err)
	}
}
