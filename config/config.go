package config

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	dbName            = "Goodsly"
	UserCollection    *mongo.Collection
	ProductCollection *mongo.Collection
	OrderCollection   *mongo.Collection
	client            *mongo.Client
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	uri := os.Getenv("MONGODB_URI")
	if uri == "" {
		log.Fatal("MONGODB_URI is not set in the environment variables")
	}

	serverAPI := options.ServerAPI(options.ServerAPIVersion1)
	opts := options.Client().ApplyURI(uri).SetServerAPIOptions(serverAPI)

	client, err = mongo.Connect(context.TODO(), opts)
	if err != nil {
		log.Fatalf("Error connecting to MongoDB: %v", err)
	}

	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatalf("Failed to ping MongoDB: %v", err)
	}

	UserCollection = client.Database(dbName).Collection("users")
	ProductCollection = client.Database(dbName).Collection("products")
	OrderCollection = client.Database(dbName).Collection("orders")

	fmt.Println("Successfully connected to MongoDB!")
}

func CloseDB() {
	if client != nil {
		err := client.Disconnect(context.TODO())
		if err != nil {
			log.Fatalf("Error disconnecting from MongoDB: %v", err)
		}
		fmt.Println("Disconnected from MongoDB.")
	}
}
