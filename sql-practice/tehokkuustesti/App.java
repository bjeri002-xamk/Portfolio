import java.sql.*;
import java.util.*;

public class App {
    public static void main(String[] args) throws SQLException {
        Connection db = DriverManager.getConnection("jdbc:sqlite:testi.db");
        db.setAutoCommit(false);

        Statement s = db.createStatement();
       
        long start = System.nanoTime();
        try {
            
        
        s.execute("CREATE TABLE Elokuvat (id INTEGER PRIMARY KEY, nimi TEXT, vuosi INTEGER)");
        
        

        
        for (int i = 0; i < 1000000; i++) {
            
            int vuosiluku = (int)Math.floor(Math.random()*(2000-1900+1)+1900);
            
            PreparedStatement p = db.prepareStatement("INSERT INTO Elokuvat (nimi, vuosi) VALUES(?,?)");
            p.setString(1,randomString(8));
            p.setInt(2,vuosiluku);
            p.execute();
            
        }
        db.commit();
    } catch (Exception e) {
        db.rollback();
    }
    finally {
        s.close();
    }
        long end = System.nanoTime();
        long total = (end-start);
        System.out.println(total);

        
        long alku = System.nanoTime();
        s.execute("CREATE INDEX idx_vuosi ON Elokuvat (vuosi)");
        for (int j = 0; j < 1000; j++) {
            int luku = (int)Math.floor(Math.random()*(2000-1900+1)+1900);
            PreparedStatement p  = db.prepareStatement("SELECT COUNT(*) yhteensa FROM Elokuvat WHERE vuosi=?");
            p.setInt(1, luku);
            ResultSet r = p.executeQuery();
            while (r.next()) {
                System.out.println(r.getInt("yhteensa"));
            }
        }
        long loppu = System.nanoTime();
        long aika = (loppu-alku);
        System.out.println(aika);
        
        
    }

    public static String randomString(int pituus) {
        Random random = new Random();
        StringBuilder stringbuilder = new StringBuilder(pituus);
            for (int y = 0; y < pituus; y++) {
                int randomint = 97 + (int)
                    (random.nextFloat() * (122-97 + 1));
                    stringbuilder.append((char) randomint);
            }
            String sana = stringbuilder.toString();
            return sana;
    }
}
