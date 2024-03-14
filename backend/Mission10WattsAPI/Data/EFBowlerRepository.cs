using Microsoft.EntityFrameworkCore;

namespace Mission10WattsAPI.Data;

public class EFBowlerRepository : IBowlerRepository
{
    private BowlerContext _bowlContext;
    
    public EFBowlerRepository(BowlerContext temp) {
        _bowlContext = temp;
    }
    
    public IEnumerable<Bowler> Bowlers => _bowlContext.Bowlers.Include("Team");
}