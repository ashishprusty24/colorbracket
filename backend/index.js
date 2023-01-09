const express = require("express");
const connection = require("./config/db");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors())
app.post("/login", (req, res) => {
  const { user_id, password } = req.body;
console.log(user_id);
console.log(password);
  let qry = "SELECT * FROM  user where user_id=? and password=?";
  connection.query(qry, [user_id, password], (err, results) => {
    if (err) {
      return err;
    } else {
      if (results.length > 0) {
       return  res.status(201).send("succesfully login");
      } else{
        return  res.send("succesfully login");
      }
    }
  });
  
});

app.get("/receipe", (req, res) => {
   
  let qry = "select u.name as creator_name ,r.id as id, r.name ,r.desc, r.image_url from user u join recipe r on u.id= r.creator_id";
  connection.query(qry,(err,results)=>{
    if(err){
        return err
    }else{
        res.send(results)
    }
  })
});

app.get("/steps/:id",(req,res)=>{
    const {id} = req.params
   
    // let qry = "select * from recipe r left join user u on r.creator_id=u.id  "
    let qry = "select * from recipe r  join user u on r.creator_id=u.id  JOIN (SELECT * FROM ingredients WHERE recipe_id= 201)  e on e.recipe_id=r.id join process p on p.recipe_id=r.id where r.id = 201 "
    connection.query(qry, [id], (err,results)=>{
        if(err){
            return err
        }else{
            res.send(results)
        }
      })
})

app.listen(8080, () => {
  console.log("server running on port 8080");
});
