package handlers

import (
	"github.com/gin-gonic/gin"
)


type Handelr struct {}


func (h *Handelr) InitRoutes() *gin.Engine {
	router := gin.New()
	
	auth := router.Group("/auth")
	{
		auth.GET("/sign-up")
		auth.GET("/sign-in")
	}
	
	return router
}