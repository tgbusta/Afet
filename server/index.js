const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// il tablosu getir //
app.get("/cities", async (req, res) => {
    try{
        const allCities = await pool.query("SELECT * FROM cities");
        res.json(allCities.rows);
    }catch (err){
        console.error(err.message)
    }
})
// ilce tablosu getir //
app.get("/districts", async (req, res) => {
    try{
        const allDistricts = await pool.query("SELECT * FROM districts");
        res.json(allDistricts.rows);
    }catch (err){
        console.error(err.message)
    }
})

// afet tipi getir //
app.get("/disastertypes", async (req, res) => {
    try{
        const allDisasterTypes = await pool.query("SELECT * FROM disaster_types");
        res.json(allDisasterTypes.rows);
    }catch (err){
        console.error(err.message)
    }
})

//Afet Bölge getir //

app.get("/regions", async (req, res) => {
    try{
        const allRegions = await pool.query("SELECT * FROM regions");
        res.json(allRegions.rows);
    }catch (err){
        console.error(err.message)
    }
})

// Afet Bölge Kayıt //
app.post("/regions", async (req, res) => {
    try {
       const disaster_type_id = req.body.disaster_type_id;
       const city_id = req.body.city_id;
       const region_name = req.body.region_name;
       const disaster_date = req.body.disaster_date;
       const district_id = req.body.district_id;
     
       const addUser = await pool.query("INSERT INTO regions (disaster_type_id, city_id, region_name, disaster_date, district_id) VALUES($1, $2, $3, $4, $5) RETURNING * ",
           [disaster_type_id, city_id, region_name, disaster_date, district_id]
       );

       res.json(addUser.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})
// bağış-yardım tipi getir //
app.get("/donationtypes", async (req, res) => {
    try{
        const allDonationTypes = await pool.query("SELECT * FROM donation_types");
        res.json(allDonationTypes.rows);
    }catch (err){
        console.error(err.message)
    }
})

//Tüzel Bağışçı Bağış Kayıt//
app.post("/legaldonors", async (req, res) => {
    try {
       const donor_title = req.body.donor_title ;
       const donor_tax_number = req.body.donor_tax_number;
       const donor_tel = req.body.donor_tel;
       const donor_email = req.body.donor_email;
       const donation_type_id = req.body.donation_type_id;
       const region_id = req.body.region_id;
       const donation_date = req.body.donation_date;
     
       const addLegalDonor = await pool.query("INSERT INTO regions (donor_title, donor_tax_number, donor_tel, donor_email, donation_type_id, region_id, donation_date) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING * ",
           [donor_title, donor_tax_number, donor_tel, donor_email, donation_type_id, region_id, donation_date]
       );

       res.json(addLegalDonor.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//Gerçek Bağışçı Bağış Kayıt//
app.post("/realdonors", async (req, res) => {
    try {
       const donor_name = req.body.donor_name ;
       const donor_surname = req.body.donor_surname ;
       const donor_tckn = req.body.donor_tckn;
       const donor_tel = req.body.donor_tel;
       const donor_email = req.body.donor_email;
       const donation_type_id = req.body.donation_type_id;
       const region_id = req.body.region_id;
       const donation_date = req.body.donation_date;

     
       const addRealDonor = await pool.query("INSERT INTO regions (donor_name, donor_surname, donor_tckn, donor_tel, donor_email, donation_type_id, region_id, donation_date) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING * ",

       [donor_name, donor_surname, donor_tckn, donor_tel, donor_email, donation_type_id, region_id, donation_date]
       );

       res.json(addRealDonor.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})



// VERİ EKLEME //
app.post("/users", async (req, res) => {
    try {
   
       const user_name = req.body.user_name;
       const user_surname = req.body.user_surname;
       const user_email = req.body.user_email;
       const user_pass = req.body.user_pass;
       const user_username = req.body.user_username;
     
       const addUser = await pool.query("INSERT INTO users (user_username, user_name, user_surname, user_pass, user_email) VALUES($1, $2, $3, $4, $5) RETURNING * ",
           [user_username, user_name,user_surname, user_pass, user_email]
       );

       res.json(addUser.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})
//exmp: http://localhost:5000/users
//{"user_name" : "Ramazan", "user_surname" : "SARI", "user_email" : "ramazan.sari@ailevecalisma.gov.tr", "user_pass" : "00000"}

// TÜM VERİYİ ÇEKME //
app.get("/users", async (req, res) => {
    try{
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows);
    }catch (err){
        console.error(err.message)
    }
})
// exmp: http://localhost:5000/users

//ARANAN VERİYİ ÇEKME //
app.get("/users/:id", async (req,res) =>{
    try {
        const {id} = req.params;
        const user = await pool.query("SELECT * FROM users WHERE user_id = $1 ORDER BY user_id DESC", [id])

        res.json(user.rows[0]);
    }catch (err){
        console.error(err.message)
    }
})
// exmp: http://localhost:5000/users/16

// VERİ GÜNCELLEME//
app.put("/users/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const {user_new_name} = req.body;
        const updateUser = await pool.query("UPDATE users SET user_name = $1 WHERE user_id = $2", [user_new_name, id]);
        res.json("Kullanıcı ismi değiştirildi.")
    }catch (err) {
        console.error(err.message)
    }
})
// http://localhost:5000/users/16
//{ "user_new_name" : "Ramazan" }
// VER SİLME //
app.delete("/users/:id", async (req,res) =>{
    try{
        const {id} = req.params;
        const deleteUser = await pool.query("DELETE FROM users WHERE user_id = $1", [id]);
        res.json("silme başarılı")
    }catch (err) {
        console.error(err.message)
    }
})
//http://localhost:5000/users/17


//yardım ekleme

app.post("/aids", async (req, res) => {
    try {
   
       const affected_name = req.body.affected_name; //affected
       const affected_surname = req.body.affected_surname;
       const affected_tckn = req.body.affected_tckn;
        const affected_email = req.body.affected_email;
        const affected_year_of_birth = req.body.affected_year_of_birth;

       const aid_date = req.body.aid_date; //aids ?
       const region_name = req.body.region_name; //regions *
     
       const addAid = await pool.query("INSERT INTO affecteds (affected_name, affected_surname, affected_tckn, affected_email, affected_year_of_birth) VALUES($1, $2, $3, $4, $5) RETURNING * ",
           [affected_name, affected_surname,affected_tckn, affected_email, affected_year_of_birth]
       );

       res.json(addAid.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})


//bölge ekleme

app.post("/regions", async (req, res) => {
    try {
   
       const region_name = req.body.region_name; //regions
       const disaster_date = req.body.disaster_date;

       const city = req.body.city; //cities
       const district = req.body.district; //districts
       const disaster_type = req.body.disaster_type; //disaster_types

      
       const addRegion = await pool.query("INSERT INTO regions (region_name, disaster_date) VALUES($1, $2) RETURNING * ",
           [region_name, disaster_date]
       );

       res.json(addRegion.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})



app.listen(5000, () => {
    console.log("Server has started on port 5000")
});