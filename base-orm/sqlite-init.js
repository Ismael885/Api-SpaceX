const db = require("aa-sqlite");

async function CrearBaseSiNoExiste() {
    await db.open("./.data/spaceX.db");

    let existe = false;
    let res = null;

    res = await db.get(
        "SELECT COUNT(*) AS contar FROM sqlite_schema WHERE type = 'table' and name = 'rockets'",
        []
    );

    if (res.contar > 0 ) existe = true;
    if (!existe) {
        await db.run(
            `CREATE TABLE rockets( 
                rocket_id   INTEGER PRIMARY KEY AUTOINCREMENT
                , rocket_name   TEXT NOT NULL UNIQUE
                , boosters      INTEGER NOT NULL   
                , stages        INTEGER NOT NULL
                , first_flight  DATE NOT NULL 
                , country       TEXT NOT NULL
                , active       BOOLEAN NOT NULL
                );`
        );

        console.log("Tabla rockets creada!");

        await db.run(
            `INSERT INTO rockets (rocket_name, boosters, stages, first_flight, country, active)
            VALUES
            ('Falcon 1', 0, 2, '2006-03-24', 'Republic of the Marshall Islands', 0),
            ('Falcon 9', 0, 2, '2010-06-04', 'United States', 1),
            ('Falcon Heavy', 2, 2, '2018-02-06', 'United States', 1),
            ('Saturn V', 5, 3, '1967-11-09', 'United States', 0),
            ('Atlas V', 0, 2, '2002-08-21', 'United States', 1),
            ('Delta IV', 0, 2, '2002-11-20', 'United States', 0),
            ('GSLV Mk III', 2, 2, '2014-12-18', 'India', 1),
            ('Long March 2F', 0, 2, '1999-11-20', 'China', 1),
            ('Soyuz', 4, 3, '1966-11-28', 'Russia', 1),
            ('Electron', 0, 2, '2017-05-25', 'New Zealand', 1);
            `
        );
    }
    db.close();
}

CrearBaseSiNoExiste();

module.exports = CrearBaseSiNoExiste;