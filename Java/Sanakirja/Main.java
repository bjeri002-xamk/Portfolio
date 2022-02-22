
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        // Kokeile sovelluksen osien yhteistoimintaa täällä
        Scanner lukija = new Scanner(System.in);
        Sanakirja kirja = new Sanakirja();

        Tekstikayttoliittyma kayttoliittyma = new Tekstikayttoliittyma(lukija, kirja);
        kayttoliittyma.kaynnista();
    }
}
