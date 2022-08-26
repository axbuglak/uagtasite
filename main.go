package main

import (
	"context"
	"net/http"
	"time"
	"log"
)


func main() {
	srv := new(Server)
	if err := srv.Run("8080"); err != nil {
		log.Fatalf("Error while running server: %s", err.Error())
	}
}


type Server struct {
	httpServer *http.Server
}


func (s *Server) Run(port string) error {
	s.httpServer = &http.Server{
		Addr: ":" + port,
		MaxHeaderBytes: 1 << 20, //1 M,
		ReadTimeout: 10 * time.Second,
		WriteTimeout: 10 * time.Second,
	}
	return s.httpServer.ListenAndServe()
}


func (s *Server) Shutdown(ctx context.Context) error {
	return s.httpServer.Shutdown(ctx)
}