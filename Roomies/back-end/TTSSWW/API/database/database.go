package database

import (
	"backend/API/config"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func OpenGormDB() (*gorm.DB, error) {
	db, err := gorm.Open(postgres.Open(config.DBURL()), &gorm.Config{})
	if err != nil {
		return nil, err
	}
	return db, nil
}
