const express=require('express')
const hbs=require('hbs')
const path=require('path')


const app=express()

const viewpath=path.join(__dirname,'templates/views')
const partialpath=path.join(__dirname,'templates/partials')

app.set('view engine', 'hbs')  
app.set('views',viewpath)
app.use(express.static(path.join(__dirname, '../frontend')));

hbs.registerPartials(partialpath)

app.get('/',(req, res)=>{
    res.render('index')
})

app.get('/about',(req, res)=>{
    res.render('about')
})

app.get('/project',(req, res)=>{
    res.render('project')
})

app.get('/contact',(req, res)=>{
   
    res.render('contact')
    
})



app.get('/help/:anything', (req, res) => {
    res.render('404')
})

app.use((req, res) => {
    res.status(404).render('404')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('hello from the server')
})