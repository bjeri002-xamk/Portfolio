import java.util.Scanner;

public class Tekstikayttoliittyma {
    private Scanner lukija;
    private Sanakirja sanakirja;
    
    public Tekstikayttoliittyma(Scanner lukija, Sanakirja sanakirja) {
        this.lukija = lukija;
        this.sanakirja = sanakirja;
    }
    
    public void kaynnista() {
        
        while(true) {
            System.out.println("Komennot:");
            System.out.println("lisaa\nhae\nlopeta");
            System.out.println("Komento:");
            String komento = lukija.nextLine();
            
            if (komento.equals("lopeta")) {
                System.out.println("Hei hei!");
                break;
                
            } else if (komento.equals("lisaa")){
                System.out.println("Sana:");
                String sana = lukija.nextLine();
                System.out.println("Käännös:");
                String kaannos = lukija.nextLine();
                sanakirja.lisaa(sana, kaannos);
                
            } else if (komento.equals("hae")) {
                System.out.println("Haettava:");
                String haettava = lukija.nextLine();
                
                if (sanakirja.kaanna(haettava) == null) {
                    System.out.println("Sanaa " + haettava + " ei löydy");
                } else {
                    System.out.println("Käännös: " + sanakirja.kaanna(haettava));
                }
                
            } else {
                System.out.println("Tuntematon komento");
            }
        }
    }
}
