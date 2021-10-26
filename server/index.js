const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// VERİ EKLEME //
app.post("/users", async (req, res) => {
    try {

       const user_name = req.body.user_name;
       const user_surname = req.body.user_surname;
       const user_mail = req.body.user_mail;
       const user_pass = req.body.user_pass;
       const user_username = req.body.user_username;


       const addUser = await pool.query("INSERT INTO users (user_name, user_surname, user_mail, user_pass, user_username) VALUES($1, $2, $3, $4, $5) RETURNING * ",
           [user_name, user_surname, user_mail, user_pass, user_username]
       );

       res.json(addUser.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})
//exmp: http://localhost:5000/users
//{"user_name" : "Ramazan", "user_surname" : "SARI", "user_mail" : "ramazan.sari@ailevecalisma.gov.tr", "user_pass" : "00000"}
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
        const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [id])

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



app.listen(5000, () => {
    console.log("Server has started on port 5000")
});