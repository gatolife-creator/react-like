import{Header}from"../components/Header.js";import{Footer}from"../components/Footer.js";import{Article}from"../components/Article.js";import{Link}from"../components/Link.js";const Index=()=>`<body>${Header()}
                    ${Link("Link","/chapter1/test.html",{className:""})}<main>${Article("<h3>ビルドテスト。うまくいってるかな？</h3><p>Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home</p>")}</main>${Footer()}</body>`;export{Index};