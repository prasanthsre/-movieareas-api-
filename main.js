import express from 'express';
const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
    res.json({ msg: "Hello Students" });
});

//CRUD functionality of movies

//R= for READ
app.get("/movies",()=>{

})
//C=for CREATE
app.post("/movies",()=>{
    
})
//U=for UPDATE
app.put("/movies/:id",()=>{
    
})
//D=for DELETE
app.delete("/movies/:id",()=>{
    
})
app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});
