package handlers

import (
	"gta5site/uagtasite/service"

	"github.com/gin-gonic/gin"
)


type Handler struct {
	services *service.Service
}


func NewHandler(services *service.Service) *Handler {
	return &Handler{services}
}


func (h *Handler) InitRoutes() *gin.Engine {
	router := gin.New()
	
	auth := router.Group("/auth")
	{
		auth.GET("/sign-up", h.singUp)
		auth.GET("/sign-in", h.singIn)
	}
	
	return router
}