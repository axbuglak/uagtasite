package service

import "gta5site/uagtasite/repository"

type Authorisation interface {
}

type Service struct {
	Authorisation
}

func NewService(repos *repository.Repository) *Service {
	return &Service{}
}