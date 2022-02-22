
public class Sailio {
    private int neste;
    
    public Sailio() {
        this.neste = 0;
    }
    
    public int sisalto() {
        return neste;
    }
    
    public void lisaa(int maara) {
        if (maara > 0) {
            neste = neste + maara;
            if (neste > 100) {
                neste = 100;
            }
        }
    }
    
    public void poista(int maara) {
        if (maara > 0) {
            neste = neste - maara;
            if (neste < 0) {
                neste = 0;
            }
        }
    }
    
    public String toString() {
        return neste + "/100";
    }
}
