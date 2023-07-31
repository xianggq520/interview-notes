const express = require('express');
const multipary = require('multiparty');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(express.json());

app.use('/', express.static('./public'));

// 接收切片
app.post('/uploadThunk', function (req, res) {
  let multiparty = new multipary.Form();

  multiparty.parse(req, (error, fields, files) => {
    console.log('@@@@', fields, files)
    if (error) {
      res.json({
        code: 0,
        data: {}
      });
    } else {

      // console.log(error, fields, files)
      // 递归创建切片存放目录
      fs.mkdirSync('./public/uploads/thunk/' + fields['filename'][0], {
        recursive: true
      });

      fs.renameSync(files['thunk'][0].path, './public/uploads/thunk/' + fields['filename'][0] + '/' + fields['name'][0])


      res.json({
        code: 1,
        data: {
          message: '切片上传完毕'
        }
      })
    }
  });
});


function mergeThunk(thunkDir, target) {
  const dir = thunkDir

  let thunkPaths = fs.readdirSync(dir)

  thunkPaths = thunkPaths.map(p => path.resolve(dir, p))

  let writeStream = fs.createWriteStream(target)
  
  pipStream(dir, thunkPaths, writeStream)
}

function pipStream (thunkDir, thunkPaths, writeStream) {
  if (thunkPaths.length === 0) {
    writeStream.end()
    fs.rmdirSync(thunkDir, {recursive: true, force: true})
    return 
  }
  // console.log(123, thunkPaths)
  const readStream = fs.createReadStream(thunkPaths.shift())
  // console.log(1234, thunkPaths)
  readStream.pipe(writeStream)

  readStream.on('end', () => {
    pipStream(thunkDir, thunkPaths, writeStream)
  })
}
// 合并切片
app.post('/mergeUploadThunk', function (req, res) {

  const filename = req.body.filename
  const extname = req.body.extname

  mergeThunk('./public/uploads/thunk/' + filename, './public/uploads/' + filename + '.' + extname)

  res.send({
    code: 1,
    message: 'uploadThunk success: ' + '/public/uploads/' + filename + '.' + extname
  });
});

app.listen(port, () => {
  console.log(`server app listening on port ${port}`);
});
