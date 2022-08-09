const fs = require('fs');

const createFile = (data, outputDirPath, filename) => {
    const filePath = outputDirPath + filename;

    fs.writeFile(filePath, data, (err) => {
        // ディレクトリ作成できなかったとき
        if (err && err.code === "ENOENT") {
            // ディレクトリ部分だけ切り取り
            const dir = filePath.substring(0, filePath.lastIndexOf("/"));

            // 親ディレクトリ作成
            fs.mkdir(dir, { recursive: true }, (err) => {
                if (err) throw err;
                createFile(data, filename);
            });
            return;
        }
        console.log("create:", filePath);
    });
};

const listFiles = (dir) =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap(function(dirent) {
        if (dirent.isFile()) {
            return `${dir}/${dirent.name}`
        } else {
            return listFiles(`${dir}/${dirent.name}`)
        }
    });


console.log("build");
const files = listFiles('src');
for (const file of files) {
    let text = fs.readFileSync(file, "utf-8");
    text = text.replace(/(\s+\<|\<\s+|\t+\<|\<\t+|\n+\<|\<\n+)/g, "<");
    text = text.replace(/(\s+\>|\>\s+|\t+\>|\>\t+|\n+\>|\>\n+)/g, ">");
    createFile(text, __dirname + "/tmp/", file);
}
setTimeout(() => {
    console.log("start creating html")
    const pageFiles = listFiles('tmp/src/pages');
    for (const pageFile of pageFiles) {
        // console.log("pages", pageFile);
        const slashCount = (pageFile.match(/\//g) || []).length
        let text = `<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.css"><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js" integrity="sha512-57oZ/vW8ANMjR/KQ6Be9v/+/h6bq9/l3f0Oc7vn6qMqyhvPd1cvKBRWWpzu0QoneImqr2SkmO4MSqU+RpHom3Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script><link rel="stylesheet" href="${"../".repeat(slashCount-3)}style.css"><title>Document</title></head><body><div id="app"></div><script type="module" src="${"../".repeat(slashCount-3)}utility/render.js"></script><script type="module" src="${"../".repeat(slashCount-3)}utility/manager.js"></script></body></html>`;
        let outputPath = pageFile.replace("tmp/src/pages/", "").replace(".js", ".html").toLowerCase();
        createFile(text, __dirname + "/tmp/src/", outputPath);
    }
}, 1000);

// setTimeout(() => {
//     fs.rmdir("./tmp");
// }, 3000);