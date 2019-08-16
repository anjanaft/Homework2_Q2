const Express=require('express');
var app=new Express();
books=[
    {
        'title':'Aatujeevitham',
        'author':'Benyamin',
        'publisher':'Green Books',
        'date_of_publication':'15 July 2008',
        'distributor':'Green Books',
        'price':199,
        

    },
    {
        title:" Khasakkinte Ithihasam ",
        author:"O.V. Vijayan",
        publisher:"Current Books",
        date_of_publication:"28 January 1968",
        distributor:"Current Books",
        price:159,
        

    },
    {
        title:"Aalahayude Penmakal",
        author:"Sara Joseph",
        publisher:"Current Books",
        date_of_publication:"1999",
        distributor:"Current Books",
        price:225,
       
    },
    {
        title:"Pathummayude Aadu",
        author:"Vaikom Muhammad Basheer",
        publisher:"DC Books",
        date_of_publication:"April 1959",
        distributor:"DC Books",
        price:200,
        

    }];

app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/home/add',(req,res)=>{
    //res.send("hello welcome");
    res.render('add');
});
app.get('/home/view',(req,res)=>{
    //res.send("hello welcome");
    res.render('view1');
});
app.listen(3000,()=>
{
    console.log("Server running on http://localhost:3000");
});