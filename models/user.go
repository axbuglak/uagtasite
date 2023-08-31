package models

type User struct {
	Id int `json:"-"`
	Login int `json:"login"`
	Password int `json:"password"`
	NickName int `json:"nickname"`
}