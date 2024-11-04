package handlers

import (
    "backend/API/models"
    "net/http"
    "strings"

    "github.com/gin-gonic/gin"
    "gorm.io/gorm"
)

func FilterUsuarios(db *gorm.DB) gin.HandlerFunc {
    return func(c *gin.Context) {
        var usuarios []models.Usuario
        comuna := c.Query("comuna")
        intereses := c.QueryArray("intereses")
        preferencias := c.QueryArray("preferencias")
        carrera := c.Query("carrera")

        query := db.Model(&models.Usuario{}).Preload("Roomie")

        if comuna != "" {
            query = query.Where("ubicacion = ?", comuna)
        }
        if len(intereses) > 0 {
            for _, interes := range intereses {
                query = query.Where("intereses LIKE ?", "%"+interes+"%")
            }
        }
        if len(preferencias) > 0 {
            for _, preferencia := range preferencias {
                query = query.Where("preferencias LIKE ?", "%"+preferencia+"%")
            }
        }
        if carrera != "" {
            query = query.Where("carrera = ?", carrera)
        }

        if err := query.Find(&usuarios).Error; err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
            return
        }

        c.JSON(http.StatusOK, usuarios)
    }
}