package app

import "log"


func main() {
	srv := new(Server)
	if err := srv.Run("8080"); err != nil {
		log.Fatalf("Error while running server: %s", err.Error())
	}
}