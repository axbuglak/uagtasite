package handlers

import (
	"net/http"
	"github.com/gin-gonic/gin"
)


func (h *Handler) singUp(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "pong",
	})
}

func (h *Handler) singIn(c *gin.Context) {
	
}