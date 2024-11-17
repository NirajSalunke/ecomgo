package routes

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"github.com/NirajSalunke/ecomgo/config"
	"github.com/NirajSalunke/ecomgo/models"
	"github.com/go-chi/chi/v5"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func userRoutes(r *chi.Mux) {
	r.Post("/create", createUser)
}
func createUser(w http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()
	if err != nil {
		http.Error(w, "Failed to parse form data", http.StatusBadRequest)
		return
	}

	name := r.FormValue("name")
	email := r.FormValue("email")
	imageURL := r.FormValue("image_url")

	db := config.UserCollection
	res := db.FindOne(context.TODO(), bson.M{email: email})
	if res.Err() == nil {

		fmt.Println("User already exits")
		return
	}
	var newUser models.User
	newUser.Name = name
	newUser.Email = email
	newUser.ImageURL = imageURL
	newUser.CreatedAt = primitive.NewDateTimeFromTime(time.Now())
	newUser.UpdatedAt = primitive.NewDateTimeFromTime(time.Now())
	res1, err1 := db.InsertOne(context.TODO(), newUser)
	if err1 != nil {
		fmt.Println("SOmething went wrong")
		return
	}
	fmt.Println(res1.InsertedID)
	w.WriteHeader(http.StatusOK)

}
