import java.util.ArrayList;

public class Matkalaukku {
    private ArrayList<Tavara> tavaroita;
    private int maxPaino;
    
    public Matkalaukku(int maxPaino) {
        this.tavaroita = new ArrayList<>();
        this.maxPaino = maxPaino;
    }
    
    public void lisaaTavara(Tavara tavara) {
        
        if (yhteispaino() + tavara.getPaino() <= maxPaino) {
            tavaroita.add(tavara);
        }
    }
    
    public void tulostaTavarat() {
        for (Tavara laukunTavara: tavaroita) {
            System.out.println(laukunTavara);
        }
    }
    
    public int yhteispaino() {
        int paino = 0;
        for (Tavara laukunTavara: tavaroita) {
            paino += laukunTavara.getPaino();
        }
        return paino;
    }
    
    public Tavara raskainTavara() {
        if (tavaroita.isEmpty()) {
            return null;
        }
        int paino = tavaroita.get(0).getPaino();
        Tavara raskain = tavaroita.get(0);
        for (Tavara laukunTavara: tavaroita) {
            if (paino < laukunTavara.getPaino()) {
                paino = laukunTavara.getPaino();
                raskain = laukunTavara;
            }
        }
        return raskain;
    }
    
    public String toString() {
        
        if (tavaroita.isEmpty()) {
            return "ei tavaroita (" + yhteispaino() + " kg)";
        } else if (tavaroita.size() == 1) {
            return tavaroita.size() + " tavara (" + yhteispaino() + " kg)";
        }
        
        return tavaroita.size() + " tavaraa (" + yhteispaino() + " kg)";
    }
}
