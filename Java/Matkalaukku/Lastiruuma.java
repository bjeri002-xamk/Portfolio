import java.util.ArrayList;

public class Lastiruuma {
    private ArrayList<Matkalaukku> matkalaukut;
    private int maxPaino;
    
    public Lastiruuma(int maxPaino) {
        this.matkalaukut = new ArrayList<>();
        this.maxPaino = maxPaino;
    }
    
    public void lisaaMatkalaukku(Matkalaukku laukku) {
        
        if (yhteispaino() + laukku.yhteispaino() <= maxPaino) {
            matkalaukut.add(laukku);
        }
    }
    
    public int yhteispaino() {
        int paino = 0;
        for (Matkalaukku ruumaLaukku: matkalaukut) {
            paino += ruumaLaukku.yhteispaino();
        }
        return paino;
    }
    
    public void tulostaTavarat() {
        for (Matkalaukku ruumaLaukku: matkalaukut) {
            ruumaLaukku.tulostaTavarat();
        }
    }
    
    public String toString() {
        return matkalaukut.size() + " matkalaukkua (" + yhteispaino() + " kg)";
    }
}
