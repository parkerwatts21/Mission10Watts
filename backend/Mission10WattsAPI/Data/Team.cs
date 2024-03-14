using System.ComponentModel.DataAnnotations;

namespace Mission10WattsAPI.Data;

public class Team
{
    [Key]
    public int TeamID { get; set; }
    [Required]
    public string TeamName { get; set; }
    
}