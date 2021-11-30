## 申请
 在阿里云申请ssl
## 下载
 * 下载nginx版本
 * 修改`.pem`文件后缀修改为`.crt`

## 配置
  ```node
    const https = require("https");
    const fs = require("fs");
    const options = {
      key: fs.readFileSync('/6491950_messi1937.cn.key'),
      cert: fs.readFileSync('/6491950_messi1937.cn.crt'),
    }

    https.createServer(options, () => {

    }).listen(3000)
  ```

* 开启`443`端口