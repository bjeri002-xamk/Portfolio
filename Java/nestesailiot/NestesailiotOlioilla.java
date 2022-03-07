
import java.util.Scanner;

public class NestesailiotOlioilla {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);
        Sailio eka = new Sailio();
        Sailio toka = new Sailio();
        
        System.out.println("Ensimmäinen: " + eka);
        System.out.println("Toinen: " + toka);

        while (true) {
            System.out.print("komennot:\nlisaa (paljonko lisätään 1. säiliöön)\nsiirra (paljonko siirretään 1. säiliöstä 2. säiliöön)\nlopeta\n");

            String luettu = lukija.nextLine();
            if (luettu.equals("lopeta")) {
                break;
            }
            String [] osat = luettu.split(" ");
            String komento = osat[0];
            int maara = Integer.valueOf(osat[1]);
            
            if (komento.equals("lisaa")) {
                eka.lisaa(maara);
                System.out.println("Ensimmäinen: " + eka);
                System.out.println("Toinen: " + toka);
            }
            
            if (komento.equals("poista")) {
                toka.poista(maara);
                System.out.println("Ensimmäinen: " + eka);
                System.out.println("Toinen: " + toka);
            }
            
            if (komento.equals("siirra")) {
                if (eka.sisalto() < maara) {
                    toka.lisaa(eka.sisalto());
                    eka.poista(maara);
                } else {
                    eka.poista(maara);
                    toka.lisaa(maara);
                }
                System.out.println("Ensimmäinen: " + eka);
                System.out.println("Toinen: " + toka);
            }
        }
    }
}
