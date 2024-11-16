package routes

import (
	"github.com/NirajSalunke/ecomgo/auth"
	"github.com/go-chi/chi/v5"
)

func authRoutes(r *chi.Mux) {
	r.Post("/auth/signup", auth.CreateUser)
}
