package main

import (
	"context"
	"gta5site/uagtasite/handlers"
	"gta5site/uagtasite/repository"
	"gta5site/uagtasite/service"
	"log"
	"net/http"
	"time"

	"github.com/spf13/viper"
)


func main() {
	if err := initConfig(); err != nil {
		log.Fatalf("Init config error: %s", err.Error())
	}

	repos := repository.NewRepository()
	services := service.NewService(repos)
	handlers := handlers.NewHandler(services)
	
	srv := new(Server)
	if err := srv.Run(viper.GetString("port"), handlers.InitRoutes()); err != nil {
		log.Fatalf("Error while running server: %s", err.Error())
	}
}


func initConfig() error {
	viper.AddConfigPath("configs")
	viper.SetConfigName("config")
	return viper.ReadInConfig()
}


type Server struct {
	httpServer *http.Server
}


func (s *Server) Run(port string, handler http.Handler) error {
	s.httpServer = &http.Server{
		Addr: ":" + port,
		Handler: handler,
		MaxHeaderBytes: 1 << 20, //1 M,
		ReadTimeout: 10 * time.Second,
		WriteTimeout: 10 * time.Second,
	}
	return s.httpServer.ListenAndServe()
}


func (s *Server) Shutdown(ctx context.Context) error {
	return s.httpServer.Shutdown(ctx)
}