package main

import (
	"log"
	"net/http"
	"os"

	"github.com/NirajSalunke/ecomgo/config"
	"github.com/NirajSalunke/ecomgo/routes"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/cors"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	defer config.CloseDB()
	router := chi.NewRouter()
	router.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"https://*", "http://*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders:   []string{"*"},
		AllowCredentials: true,
	}))
	routes.MountRoutes(router)

	log.Printf("Server starting on port %v...\n", os.Getenv("PORT"))
	err1 := http.ListenAndServe(":"+os.Getenv("PORT"), router)
	if err1 != nil {
		log.Fatalf("Error starting server: %v", err)
	}
}
