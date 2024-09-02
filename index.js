const express = require('express')
const app=express();
app.use(express.json());

let books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Moby Dick", author: "Herman Melville", year: 1851 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  ];

app.post('/books', function(req, res){
 const new_title = {
        title:"jrn vjnr" , year:"abdurehman",
    }
books.push(new_title);
res.end(JSON.stringify(books));
})

app.get('/books', function(req, res){
    res.end(JSON.stringify(books))
})  


app.patch('/', function(req, res){
    
})

app.delete('/books', function(req, res){
   const del_obj = books.pop();
   res.end(JSON.stringify(books))
})



app.listen(8000,()=>{
console.log("Server Started");
});

