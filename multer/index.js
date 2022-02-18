const express = require('express')

const app = express()
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', function (req, res) {
  res.render('index')
})

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

app.post('/avatar', upload.single('avatar'), function (req, res) {
  const { filename, size } = req.file

  return res.render('avatar', { image: `/uploads/${filename}`, size })
})

app.use('/uploads', express.static('uploads'))

app.listen(3333, () => {
  console.log('🚀 Server started on http://localhost:3333')
})
