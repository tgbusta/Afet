require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const soap = require("soap");
const sendEmail = require("./_helpers/emailHelper");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const verify = require("./verifyToken");
const { v4: uuidv4 } = require("uuid");

app.use(cors());
app.use(express.json());

//---------------nvi -------------------//

app.get("/nvi/:ad/:soyad/:dyili/:tckno", function (req, res) {
  var url = "https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx?WSDL";
  try {
    var args = {
      TCKimlikNo: req.params.tckno,
      Ad: req.params.ad,
      Soyad: req.params.soyad,
      DogumYili: req.params.dyili,
    };
    soap.createClient(url, function (err, client) {
      client.TCKimlikNoDogrula(args, function (err, result) {
        res.send({
          response: result,
        });
        console.log(req.params);
      });
    });
  } catch (err) {
    console.error(err.message);
  }
});

// ---------------------------------cities------------------------------ //
//get//
app.get("/cities", async (req, res) => {
  try {
    const allCities = await pool.query("SELECT * FROM cities");
    res.json(allCities.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//search//
app.get("/cities/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const city = await pool.query(
      "SELECT * FROM cities WHERE city_id = $1 ORDER BY city_id DESC",
      [id]
    );

    res.json(city.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//--------------------------------districts-------------------------------------------------------//
//get//
app.get("/districts", async (req, res) => {
  try {
    const allDistricts = await pool.query("SELECT * FROM districts");
    res.json(allDistricts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//search//
app.get("/districts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const district = await pool.query(
      "SELECT * FROM districts WHERE district_id = $1 ORDER BY district_id DESC",
      [id]
    );

    res.json(district.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//--------------------------------disaster_type--------------------------------------------------//
//get//
app.get("/disastertypes", async (req, res) => {
  try {
    const allDisasterTypes = await pool.query("SELECT * FROM disaster_types");
    res.json(allDisasterTypes.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//search//
app.get("/disastertypes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const disasterType = await pool.query(
      "SELECT * FROM disaster_types WHERE disaster_type_id = $1 ORDER BY disaster_type_id DESC",
      [id]
    );

    res.json(disasterType.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//--------------- regions-------------------------------------------------------------------------------- //

//get//

app.get("/regions", async (req, res) => {
  try {
    const allRegions = await pool.query(
      "SELECT * FROM regions ORDER BY region_id DESC"
    );
    res.json(allRegions.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//post//
app.post("/regions", async (req, res) => {
  try {
    const disaster_type_id = req.body.disaster_type_id;
    const city_id = req.body.city_id;
    const region_name = req.body.region_name;
    const disaster_date = req.body.disaster_date;
    const district_id = req.body.district_id;

    const addRegion = await pool.query(
      "INSERT INTO regions (disaster_type_id, city_id, region_name, disaster_date, district_id) VALUES($1, $2, $3, $4, $5) RETURNING * ",
      [disaster_type_id, city_id, region_name, disaster_date, district_id]
    );

    res.json(addRegion.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//delete//
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

//put//
app.put("/regions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { reg_new_disaster_type_id } = req.body;
    const { reg_new_city_id } = req.body;
    const { reg_new_name } = req.body;
    const { reg_new_dis_date } = req.body;
    const { reg_new_dist_id } = req.body;

    const updateRegion = await pool.query(
      "UPDATE regions SET disaster_type_id = $1, city_id = $2, region_name = $3, disaster_date = $4, district_id = $5  WHERE region_id = $6",
      [
        reg_new_disaster_type_id,
        reg_new_city_id,
        reg_new_name,
        reg_new_dis_date,
        reg_new_dist_id,
        id,
      ]
    );
    res.json("Kayıt güncellendi.");
  } catch (err) {
    console.error(err.message);
  }
});

// --------------------------------------------aids-------------------------------------------------------------- //
//get//

app.get("/aids", async (req, res) => {
  try {
    const allAids = await pool.query("SELECT * FROM aids ORDER BY aid_id DESC");
    res.json(allAids.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//post//
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

//delete//
app.delete("/aids/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAid = await pool.query("DELETE FROM aids WHERE aid_id = $1", [
      id,
    ]);
    res.json("silme başarılı");
  } catch (err) {
    console.error(err.message);
  }
});

//put//
app.put("/aids/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { aid_new_region_id } = req.body;
    const { aid_new_don_type_id } = req.body;
    const { aid_new_date } = req.body;
    const { aid_new_tel } = req.body;
    const { aid_new_mail } = req.body;

    const updateAid = await pool.query(
      "UPDATE aids SET region_id = $1, donation_type_id = $2, aid_date = $3, affected_tel = $4, affected_email = $5 WHERE aid_id = $6",
      [
        aid_new_region_id,
        aid_new_don_type_id,
        aid_new_date,
        aid_new_tel,
        aid_new_mail,
        id,
      ]
    );
    res.json("Kayıt güncellendi.");
  } catch (err) {
    console.error(err.message);
  }
});

//----------------------donation_types-----------------------------------------------------------//
//get //
app.get("/donationtypes", async (req, res) => {
  try {
    const allDonationTypes = await pool.query("SELECT * FROM donation_types");
    res.json(allDonationTypes.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//-----------------------------donations-----------------------------------------------------------------//
//delete//
app.delete("/donations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteDonation = await pool.query(
      "DELETE FROM donations WHERE donation_id = $1",
      [id]
    );
    res.json("silme başarılı");
  } catch (err) {
    console.error(err.message);
  }
});

//get//

app.get("/donations", async (req, res) => {
  try {
    const allDonations = await pool.query(
      "SELECT * FROM donations ORDER BY donation_id DESC"
    );
    res.json(allDonations.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//post//
app.post("/donations", async (req, res) => {
  try {
    const donor_name = req.body.donor_name;
    const donor_surname = req.body.donor_surname;
    const donor_tckn = req.body.donor_tckn;
    const donor_year_of_birth = req.body.donor_year_of_birth;
    const donor_tel = req.body.donor_tel;
    const donor_email = req.body.donor_email;
    const donation_type_id = req.body.donation_type_id;
    const region_id = req.body.region_id;
    const donation_date = req.body.donation_date;

    const addDonation = await pool.query(
      "INSERT INTO donations (donor_name, donor_surname, donor_tckn,donor_year_of_birth, donor_tel, donor_email, donation_type_id, region_id, donation_date ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING * ",
      [
        donor_name,
        donor_surname,
        donor_tckn,
        donor_year_of_birth,
        donor_tel,
        donor_email,
        donation_type_id,
        region_id,
        donation_date,
      ]
    );

    res.json(addDonation.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//put//
app.put("/donations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { don_new_region_id } = req.body;
    const { don_new_don_type_id } = req.body;
    const { don_new_date } = req.body;
    const { don_new_tel } = req.body;
    const { don_new_mail } = req.body;

    const updateDonation = await pool.query(
      "UPDATE donations SET region_id = $1, donation_type_id = $2, donation_date = $3, donor_tel = $4, donor_email = $5  WHERE donation_id = $6",
      [
        don_new_region_id,
        don_new_don_type_id,
        don_new_date,
        don_new_tel,
        don_new_mail,
        id,
      ]
    );
    res.json("Kayıt güncellendi.");
  } catch (err) {
    console.error(err.message);
  }
});


//-------------------------------users---------------------------------------------------------//
//post//
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

//get//
app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query(
      "SELECT * FROM users ORDER BY user_id DESC"
    );
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//search//
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


//put//
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { user_new_name } = req.body;
    const { user_new_surname } = req.body;
    const { user_new_pass } = req.body;
    const { user_new_mail } = req.body;
    const { user_new_username } = req.body;

    console.log(req.params);
    console.log(user_new_name);

    const updateUser = await pool.query(
      "UPDATE users SET user_name = $1, user_surname = $2, user_pass = $3, user_email = $4, user_username = $5 WHERE user_id = $6",
      [
        user_new_name,
        user_new_surname,
        user_new_pass,
        user_new_mail,
        user_new_username,
        id,
      ]
    );
    res.json("Kayıt güncellendi.");
  } catch (err) {
    console.error(err.message);
  }
});

//delete//
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

/** ---------------------------Register user----------------------------- */

app.post("/register", async (req, res) => {
  try {
    const user = {
      ...req.body,
    };

    const _user = await pool.query(
      "SELECT * FROM users where user_email= $1 ",
      [user.email]
    );
    if (_user.rowCount === 0) {
      const salt = await bcrypt.genSalt(10);
      const psswHashed = await bcrypt.hash(user.password, salt);
      const addUser = await pool.query(
        "INSERT INTO users (user_username, user_name, user_surname, user_pass, user_email,user_auth_code,user_exp_time,user_authcode_valid) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING * ",
        [
          user.email,
          user.name,
          user.lastName,
          psswHashed,
          user.email,
          uuidv4(),
          new Date(),
          0,
        ]
      );
      let html = `<h1>Afet Yardım Hoşgeldiniz</h1>
      <h2>L&uuml;tfen e posta adesini doğrulayınız.</h2><p>E posta adresini <a title="tıkla" href="[[REPLACE_HERE]]">buraya</a> tıklayarak onaylayabilirsin.</p>
  `;
      html = html.replace(
        "[[REPLACE_HERE]]",
        "http://localhost:3000/welcome?code=" + addUser.rows[0].user_auth_code
      );
      await sendEmail({
        to: user.email,
        subject: "Kayıt olmak için lütfen onaylayınız.",
        html: html,
      });

      res.send({
        message:
          "Kullanici Başarıyla kaydedilmiştir.Lütfen e posta adresinizi kontrol ediniz.",
        status: true,
      });
    } else {
      res.send({
        message: "Kullanici zaten Kayıtlı",
        status: false,
      });
    }
  } catch (err) {
    console.error(err.message);
  }
});

/*------------------------ Validate user ------------------------------------*/

app.get("/checkUser/:code", async (req, res) => {
  try {
    const { code } = req.params;
    const user = await pool.query(
      "SELECT * FROM users WHERE user_auth_code = $1 ",
      [code]
    );

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/validateUser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateUser = await pool.query(
      "UPDATE users SET user_authcode_valid = $1 WHERE user_id = $2",
      [1, id]
    );
    res.send({
      message:
        "Bilgileriniz başarıyla doğrulanmıştır.Sisteme giriş yapabilirsiniz.",
      status: true,
    });
  } catch (err) {
    console.error(err.message);
  }
});

/*--------------------------- Authentication , Authorization -----------------------------------*/

app.post("/login", async (req, res) => {
  try {
    const user = {
      ...req.body,
    };

    const _user = await pool.query(
      "SELECT * FROM users where user_email= $1",
      [user.username]
    );
    if (_user.rowCount === 0) {
      res.send({
        message: "Kullanıcı adı veya şifre hatalı.",
        status: false,
      });
    } else {
      const validatePasswd = await bcrypt.compare(
        user.password,
        _user.rows[0].user_pass
      );

      if (!validatePasswd) {
        res.send({
          message: "Şifre hatalı.",
          status: false,
        });
      } else if(!_user.rows[0].user_authcode_valid){
        res.send({
          message: "Lütfen önce hesabınızı doğrulayın.",
          status: false,
        });
      }
      else{

        const token = await jwt.sign(
          {
            username: _user.rows[0].user_name,
          },
          ACCESS_TOKEN_SECRET
        );

        res.send({
          message: "Giriş başarılı.",
          status: true,
          token: token,
        });
      }
    }
  } catch (err) {
    console.error(err.message);
  }
});
const ACCESS_TOKEN_SECRET =
  "ba89352bd55da3fb4d7b82ccb634806d40262ea2bdc349d9744646af9711f3973b10d";
app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
