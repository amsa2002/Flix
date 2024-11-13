const express = require('express')
const { videoUpload } = require('../middlewares/videoUpload')
const {addVideo, getAllVideos} = require('../controllers/video')
const router = express.Router()

// router.get('/', (req,res)=>{
//     res.send("Express is running")
// })

router.post('/upload', videoUpload.single('video'), addVideo)
      .get('/videos', getAllVideos)

module.exports = router