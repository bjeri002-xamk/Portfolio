import java.nio.charset.Charset;
import java.sql.*;
import java.util.Random;



public class App {
    public static void main(String[] args) throws SQLException {
        Connection db = DriverManager.getConnection("jdbc:sqlite:testi.db");
        Statement s = db.createStatement();

        s.execute("CREATE TABLE Kayttajat (id INTEGER PRIMARY KEY, nimi TEXT)");
        s.execute("CREATE TABLE Videot (id INTEGER PRIMARY KEY, nimi TEXT, kuvaus TEXT, kayttaja_id INTEGER REFERENCES Kayttajat, aika DATETIME)");
        s.execute("CREATE TABLE Arviot (id INTEGER PRIMARY KEY, video_id INTEGER REFERENCES Videot, kayttaja_id INTEGER REFERENCES Kayttajat, kommentti_id INTEGER REFERENCES Kommentit, arvio BOOLEAN)");
        s.execute("CREATE TABLE Kommentit (id INTEGER PRIMARY KEY, video_id INTEGER REFERENCES Videot, kayttaja_id INTEGER REFERENCES Kayttajat, arvio_id INTEGER REFERENCES Arviot, viesti TEXT, aika DATETIME)");
        s.execute("CREATE TABLE Kanavat (id INTEGER PRIMARY KEY, video_id INTEGER REFERENCES Videot, kayttaja_id INTEGER REFERENCES Kayttajat)");
        s.execute("CREATE TABLE Soittolistat (id INTEGER PRIMARY KEY, kanava_id INTEGER REFERENCES Kanavat, kayttaja_id INTEGER REFERENCES Kayttajat)");
    
        s.execute("INSERT INTO Kayttajat (nimi) VALUES ('Santeri')");
        s.execute("INSERT INTO Kayttajat (nimi) VALUES ('Pekka')");
        s.execute("INSERT INTO Kayttajat (nimi) VALUES ('Ulla')");
        s.execute("INSERT INTO Kayttajat (nimi) VALUES ('Emma')");
        s.execute("INSERT INTO Videot (nimi, kuvaus, kayttaja_id, aika) VALUES ('santerivideo', 'kissavideo',3,2000)");
        s.execute("INSERT INTO Videot (nimi, kuvaus, kayttaja_id, aika) VALUES ('svideo', 'kissavideo',3,2000)");
        s.execute("INSERT INTO Videot (nimi, kuvaus, kayttaja_id, aika) VALUES ('saeo', 'video',3,2300)");
        s.execute("INSERT INTO Videot (nimi, kuvaus, kayttaja_id, aika) VALUES ('sandeo', 'koiravideo',3,2003)");

        ResultSet r = s.executeQuery("SELECT * FROM Videot WHERE kayttaja_id=3");
        while (r.next()) {
            System.out.println(r.getInt("id") + " " + r.getString("nimi") + " " + r.getString("kuvaus") + " " + r.getInt("kayttaja_id") + " " + r.getString("aika"));
        }
/*
        ResultSet r = s.executeQuery("SELECT * FROM Kayttajat");
        while (r.next()) {
            System.out.println(r.getInt("id") + " " + r.getString("nimi"));
        }
        s.execute("INSERT INTO Kanavat (id,video_id, kayttaja_id) VALUES (1,2, 3)");
        
        ResultSet r = s.executeQuery("SELECT * FROM Kanavat");
        while (r.next()) {
            System.out.println(r.getInt("kayttaja_id") + "\t" + r.getInt("video_id"));
        }

        s.execute("INSERT INTO Kanavat (video_id, kayttaja_id) VALUES (NULL,1,1,false)");
        
        ResultSet r = s.executeQuery("SELECT V.nimi nimi, V.kuvaus kuvaus, K.id id FROM Videot V, Kanavat K WHERE V.kayttaja_id=K.kayttaja_id AND K.id=3 ORDER BY V.nimi DESC");
        while (r.next()) {
            System.out.println(r.getString("nimi") + "\t" + r.getString("kuvaus") + "\t" + r.getInt("id"));
        }

        s.execute("CREATE TABLE Seuraamiset (id INTEGER PRIMARY KEY, kanava_id INTEGER REFERENCES Kanavat, kayttaja_id INTEGER REFERENCES Kayttajat)");
        s.execute("INSERT INTO Seuraamiset (kanava_id, kayttaja_id) VALUES (3,1)");
        s.execute("INSERT INTO Seuraamiset (kanava_id, kayttaja_id) VALUES (3,2)");
        s.execute("INSERT INTO Seuraamiset (kanava_id, kayttaja_id) VALUES (3,4)");
        s.execute("INSERT INTO Seuraamiset (kanava_id, kayttaja_id) VALUES (3,5)");
        s.execute("INSERT INTO Seuraamiset (kanava_id, kayttaja_id) VALUES (3,6)");

        ResultSet r = s.executeQuery("SELECT COUNT(*) seuraajat FROM Seuraamiset WHERE kanava_id = 3");
        while (r.next()) {
            System.out.println(r.getInt("seuraajat"));
        }

        s.execute("CREATE TABLE KanavanVideot (id INTEGER PRIMARY KEY, kanava_id INTEGER REFERENCES Kanavat, video_id INTEGER REFERENCES Videot)");
        s.execute("INSERT INTO KanavanVideot (kanava_id, video_id) VALUES (3,2)");
        s.execute("INSERT INTO KanavanVideot (kanava_id, video_id) VALUES (3,3)");
       
        ResultSet r = s.executeQuery("SELECT COUNT(*) seuraajia FROM Seuraamiset S WHERE kanava_id=3");
        while (r.next()) {
            System.out.println(r.getInt("seuraajia"));
        }

        r = s.executeQuery("SELECT V.aika katselukerrat, V.nimi nimi, KV.kanava_id kanava FROM Videot V, KanavanVideot KV WHERE KV.video_id=V.id AND KV.kanava_id=2");
        while (r.next()) {
            System.out.println(r.getInt("katselukerrat") + "\t" + r.getString("nimi") + "\t" + r.getInt("kanava"));
        }
        
        Random random = new Random();
        StringBuilder stringbuilder = new StringBuilder(8);
        for (int i = 0; i < 8; i++) {
            int randomint = 97 + (int)
                (random.nextFloat() * (122-97 + 1));
                stringbuilder.append((char) randomint);
        }
        String sana = stringbuilder.toString();
        System.out.println(sana); */
        

    }
}