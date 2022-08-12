/* eslint-disable n/no-path-concat */
const fs = require('fs');

const createFile = (data, outputDirPath, filename) => {
    const filePath = outputDirPath + filename;

    fs.writeFile(filePath, data, (err) => {
        // ディレクトリ作成できなかったとき
        if (err && err.code === 'ENOENT') {
            // ディレクトリ部分だけ切り取り
            const dir = filePath.substring(0, filePath.lastIndexOf('/'));

            // 親ディレクトリ作成
            fs.mkdir(dir, { recursive: true }, (err) => {
                if (err) throw err;
                createFile(data, filename);
            });
            return;
        }
        console.log('create:', filePath);
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

console.log('build');
const files = listFiles('src');
for (const file of files) {
    if (file === 'src/template.html') continue;
    else if (file.match(/.jpeg|.png|.gif/)) {
        fs.copyFileSync(file, __dirname + '/tmp/' + file);
    } else {
        let text = fs.readFileSync(file, 'utf-8');
        text = text.replace(/(\s+<|<\s+|\t+<|<\t+|\n+<|<\n+)/g, '<');
        text = text.replace(/(\s+>|>\s+|\t+>|>\t+|\n+>|>\n+)/g, '>');
        createFile(text, __dirname + '/tmp/', file);
    }
}
setTimeout(() => {
    console.log('start creating html')
    const pageFiles = listFiles('tmp/src/pages');
    let templateHTML = fs.readFileSync(__dirname + '/src/template.html', 'utf-8');
    templateHTML = templateHTML.replace(/(\s+>|>\s+|\t+>|>\t+|\n+>|>\n+)/g, '>').replace(/(\s+<|<\s+|\t+<|<\t+|\n+<|<\n+)/g, '<');
    console.log(templateHTML);
    for (const pageFile of pageFiles) {
        const slashCount = (pageFile.match(/\//g) || []).length;
        const text = templateHTML.replace(/%TEMPLATE%/g, '../'.repeat(slashCount - 3));
        const outputPath = pageFile.replace('tmp/src/pages/', '').replace('.js', '.html').toLowerCase();
        createFile(text, __dirname + '/tmp/src/', outputPath);
    }
}, 1000);