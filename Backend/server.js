const app=require("./app");


app.listen(process.env.PORT, ()=>{
    console.log(`server listening on ${process.env.PORT}`);
})