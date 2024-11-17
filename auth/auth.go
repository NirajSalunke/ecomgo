package auth

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"time"

	"github.com/NirajSalunke/ecomgo/config"
	"github.com/NirajSalunke/ecomgo/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"golang.org/x/crypto/bcrypt"
)

func CreateUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Methods", "POST")

	db := config.UserCollection
	if r.Header.Get("Content-Type") != "application/x-www-form-urlencoded" {
		http.Error(w, "Invalid Content-Type, expected application/x-www-form-urlencoded", http.StatusUnsupportedMediaType)
		return
	}
	err := r.ParseForm()
	if err != nil {
		http.Error(w, "Unable to parse form data", http.StatusBadRequest)
		return
	}

	formData := r.PostForm
	newUser := parseFormToUser(formData)
	hashPassword, err := bcrypt.GenerateFromPassword([]byte(newUser.Password), 10)
	if err != nil {
		http.Error(w, "Something went wrong", http.StatusBadRequest)
		return
	}
	fmt.Println(hashPassword)
	newUser.Password = string(hashPassword)
	response := db.FindOne(context.TODO(), bson.M{"email": newUser.Email})
	if err := response.Err(); err == nil {
		http.Error(w, "User already exists with this email!", http.StatusConflict)
		return
	} else if err != mongo.ErrNoDocuments {
		log.Println("Database error:", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}
	newUser.CreatedAt = primitive.NewDateTimeFromTime(time.Now())
	newUser.UpdatedAt = primitive.NewDateTimeFromTime(time.Now())
	result, err := db.InsertOne(context.TODO(), newUser)
	if err != nil {
		log.Println("Error inserting user:", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	fmt.Println("User added to DB:", result.InsertedID)
	json.NewEncoder(w).Encode(newUser)
}

func parseFormToUser(formData url.Values) models.User {
	return models.User{
		Name:     formData.Get("name"),
		Password: formData.Get("password"),
		Email:    formData.Get("email"),
	}
}
