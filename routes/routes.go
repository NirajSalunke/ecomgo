package routes

import "github.com/go-chi/chi/v5"

func MountRoutes(r *chi.Mux) {
	productRoutes(r)
	userRoutes(r)
	orderRoutes(r)
}
