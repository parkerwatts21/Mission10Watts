namespace Mission10WattsAPI.Data;

public interface IBowlerRepository
{
    IEnumerable<Bowler> Bowlers { get; }
}