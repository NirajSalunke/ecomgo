package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	ID        primitive.ObjectID   `bson:"_id,omitempty" json:"id"`
	ImageURL  string               `bson:"image_url,omitempty" json:"image_url,omitempty"`
	Name      string               `bson:"name" json:"name"`
	Email     string               `bson:"email" json:"email"`
	Password  string               `bson:"password" json:"-"`
	Phone     string               `bson:"phone,omitempty" json:"phone,omitempty"`
	Address   string               `bson:"address,omitempty" json:"address,omitempty"`
	Orders    []primitive.ObjectID `bson:"orders,omitempty" json:"orders,omitempty"`
	CreatedAt primitive.DateTime   `bson:"created_at" json:"created_at"`
	UpdatedAt primitive.DateTime   `bson:"updated_at" json:"updated_at"`
}

type Product struct {
	ID          primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Name        string             `bson:"name" json:"name"`
	Price       float64            `bson:"price" json:"price"`
	Description string             `bson:"description,omitempty" json:"description,omitempty"`
	ImageURL    []string           `bson:"image_url,omitempty" json:"image_url,omitempty"`
	Category    string             `bson:"category,omitempty" json:"category,omitempty"`
	Stock       int                `bson:"stock" json:"stock"`
	CreatedAt   primitive.DateTime `bson:"created_at" json:"created_at"`
	UpdatedAt   primitive.DateTime `bson:"updated_at" json:"updated_at"`
}

type Order struct {
	ID           primitive.ObjectID   `bson:"_id,omitempty" json:"id"`
	UserID       primitive.ObjectID   `bson:"user_id" json:"user_id"`
	Products     []primitive.ObjectID `bson:"products" json:"products"`
	Quantities   []int                `bson:"quantities" json:"quantities"`
	Total        float64              `bson:"total" json:"total"`
	Status       string               `bson:"status" json:"status"`
	ShippingAddr string               `bson:"shipping_addr,omitempty" json:"shipping_addr,omitempty"`
	CreatedAt    primitive.DateTime   `bson:"created_at" json:"created_at"`
	UpdatedAt    primitive.DateTime   `bson:"updated_at" json:"updated_at"`
}
