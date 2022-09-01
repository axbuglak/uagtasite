package repository


type Authorisation interface {

}


type Repository struct {
	Authorisation
}


func NewRepository() *Repository {
	return &Repository{}
} 