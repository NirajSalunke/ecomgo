package routes

import (
	"net/http"

	"github.com/go-chi/chi/v5"
)

func productRoutes(r *chi.Mux) {
	r.Post("/product", createProduct)
}

func createProduct(w http.ResponseWriter, r *http.Request) {

}
