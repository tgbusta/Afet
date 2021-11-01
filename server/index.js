const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// cities get//
app.get("/cities", async (req, res) => {
  try {
    const allCities = await pool.query("SELECT * FROM cities");
    res.json(allCities.rows);
  } catch (err) {
    console.error(err.message);
  }
});
// districts get//
app.get("/districts", async (req, res) => {
  try {
    const allDistricts = await pool.query("SELECT * FROM districts");
    res.json(allDistricts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// disaster_type get //
app.get("/disastertypes", async (req, res) => {
  try {
    const allDisasterTypes = await pool.query("SELECT * FROM disaster_types");
    res.json(allDisasterTypes.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//regions get //

app.get("/regions", async (req, res) => {
  try {
    const allRegions = await pool.query("SELECT * FROM regions");
    res.json(allRegions.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// regions post //
app.post("/regions", async (req, res) => {
  try {
    const disaster_type_id = req.body.disaster_type_id;
    const city_id = req.body.city_id;
    const region_name = req.body.region_name;
    const disaster_date = req.body.disaster_date;
    const district_id = req.body.district_id;

    const addUser = await pool.query(
      "INSERT INTO regions (disaster_type_id, city_id, region_name, disaster_date, district_id) VALUES($1, $2, $3, $4, $5) RETURNING * ",
      [disaster_type_id, city_id, region_name, disaster_date, district_id]
    );

    res.json(addUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// region delete //
app.delete("/regions/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteRegion = await pool.query(
        "DELETE FROM regions WHERE region_id = $1",
        [id]
      );
      res.json("silme başarılı");
    } catch (err) {
      console.error(err.message);
    }
  });

//aids get //

app.get("/aids", async (req, res) => {
  try {
    const allAids = await pool.query("SELECT * FROM aids");
    res.json(allAids.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// aids post //
app.post("/aids", async (req, res) => {
  try {
    const region_id = req.body.region_id;
    const donation_type_id = req.body.donation_type_id;
    const aid_date = req.body.aid_date;
    const affected_name = req.body.affected_name;
    const affected_surname = req.body.affected_surname;
    const affected_tckn = req.body.affected_tckn;
    const affected_year_of_birth = req.body.affected_year_of_birth;
    const affected_email = req.body.affected_email;
    const affected_tel = req.body.affected_tel;

    const addAid = await pool.query(
      "INSERT INTO aids (region_id, donation_type_id, aid_date, affected_name, affected_surname, affected_tckn, affected_year_of_birth, affected_email, affected_tel) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING * ",
      [
        region_id,
        donation_type_id,
        aid_date,
        affected_name,
        affected_surname,
        affected_tckn,
        affected_year_of_birth,
        affected_email,
        affected_tel,
      ]
    );

    res.json(addAid.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// aid delete //
app.delete("/aids/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteAid = await pool.query(
        "DELETE FROM aids WHERE aid_id = $1",
        [id]
      );
      res.json("silme başarılı");
    } catch (err) {
      console.error(err.message);
    }
  });

// donation_types get //
app.get("/donationtypes", async (req, res) => {
  try {
    const allDonationTypes = await pool.query("SELECT * FROM donation_types");
    res.json(allDonationTypes.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//donations delete
app.delete("/donations/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteDonation = await pool.query(
        "DELETE FROM donations WHERE aid_id = $1",
        [id]
      );
      res.json("silme başarılı");
    } catch (err) {
      console.error(err.message);
    }
  });

//real_donors post//
app.post("/legaldonors", async (req, res) => {
  try {
    const donor_name = req.body.donor_name;
    const donor_surname = req.body.donor_surname;
    const donor_tckn = req.body.donor_tckn;
    const donor_tel = req.body.donor_tel;
    const donor_email = req.body.donor_email;
    const donation_type_id = req.body.donation_type_id;
    const region_id = req.body.region_id;
    const donation_date = req.body.donation_date;
    const donor_title = req.body.donor_title;
    const donor_tax_number = req.body.donor_tax_number;

    const transfered = 0;

    const adddonations = await pool.query(

      "INSERT INTO donations (region_id, donation_type_id, donation_date, transfered, donor_tel, donor_email) VALUES($1, $2, $3, $4, $5, $6) RETURNING * ",
      [region_id, donation_type_id, donation_date, transfered, donor_tel, donor_email]

    );

    res.json(adddonations.rows[0]);

    const res_donation_id = adddonations.rows[0].donation_id;

    if(res_donation_id){
      const add_donation_real_donor = await pool.query(
        "INSERT INTO donations_legal_donor (donation_id, donor_title, donor_tax_number) VALUES($1, $2, $3) RETURNING * ",
        [res_donation_id, donor_title, donor_tax_number]
      );
    res.json(add_donation_real_donor.rows[0]);
    }

    

  } catch (err) {
    console.error(err.message);
  }
});

//real_donors post//
app.post("/realdonors", async (req, res) => {
  try {
    const donor_name = req.body.donor_name;
    const donor_surname = req.body.donor_surname;
    const donor_tckn = req.body.donor_tckn;
    const donor_tel = req.body.donor_tel;
    const donor_email = req.body.donor_email;
    const donation_type_id = req.body.donation_type_id;
    const region_id = req.body.region_id;
    const donation_date = req.body.donation_date;
    const transfered = 0;

    const adddonations = await pool.query(

      "INSERT INTO donations (region_id, donation_type_id, donation_date, transfered, donor_tel, donor_email) VALUES($1, $2, $3, $4, $5, $6) RETURNING * ",
      [region_id, donation_type_id, donation_date, transfered, donor_tel, donor_email]

    );

    res.json(adddonations.rows[0]);

    const res_donation_id = adddonations.rows[0].donation_id;

    if(res_donation_id){
      const add_donation_real_donor = await pool.query(
        "INSERT INTO donations_real_donor (donation_id, donor_name, donor_surname, donor_tckn) VALUES($1, $2, $3, $4) RETURNING * ",
        [res_donation_id, donor_name, donor_surname, donor_tckn]
      );
    res.json(add_donation_real_donor.rows[0]);
    }

    

  } catch (err) {
    console.error(err.message);
  }
});

// users post //
app.post("/users", async (req, res) => {
  try {
    const user_name = req.body.user_name;
    const user_surname = req.body.user_surname;
    const user_email = req.body.user_email;
    const user_pass = req.body.user_pass;
    const user_username = req.body.user_username;

    const addUser = await pool.query(
      "INSERT INTO users (user_username, user_name, user_surname, user_pass, user_email) VALUES($1, $2, $3, $4, $5) RETURNING * ",
      [user_username, user_name, user_surname, user_pass, user_email]
    );

    res.json(addUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
//exmp: http://localhost:5000/users
//{"user_name" : "Ramazan", "user_surname" : "SARI", "user_email" : "ramazan.sari@ailevecalisma.gov.tr", "user_pass" : "00000"}

// users get //
app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});
// exmp: http://localhost:5000/users

//users search //
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query(
      "SELECT * FROM users WHERE user_id = $1 ORDER BY user_id DESC",
      [id]
    );

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
// exmp: http://localhost:5000/users/16

// users put//
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { user_new_name } = req.body;
    const updateUser = await pool.query(
      "UPDATE users SET user_name = $1 WHERE user_id = $2",
      [user_new_name, id]
    );
    res.json("Kullanıcı ismi değiştirildi.");
  } catch (err) {
    console.error(err.message);
  }
});
// http://localhost:5000/users/16
//{ "user_new_name" : "Ramazan" }

// user delete //
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query(
      "DELETE FROM users WHERE user_id = $1",
      [id]
    );
    res.json("silme başarılı");
  } catch (err) {
    console.error(err.message);
  }
});
//http://localhost:5000/users/17

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
