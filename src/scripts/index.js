import axios from "axios"

const $list = document.getElementById("list");
const $input = document.getElementById("tag");
const $button = document.getElementById("button");

$button.addEventListener("click", async() => {
    $list.innerHTML = "";
    const res = await axios.get("https://qiita.com/api/v2/items", {
        params: {
            query: `tag:${$input.value}`,
        }
    })
    res.data.forEach(item => {
        const newItem = document.createElement("li");
        newItem.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a>`;
        $list.appendChild(newItem);
    });
});


// const $title = document.getElementById("title");

// const getRandomColor = ()=> {
//     const red = Math.round(Math.random * 255);
//     const green = Math.round(Math.random * 255);
//     const bule = Math.round(Math.random * 255);
//     return 'rgb(${red}, ${green}, ${blue})'
// }

// $title.addEventListener("click", ()=> {
//     setTimeout(()=> {
//         $title.style.color = getRandomColor();
//         $title.textContent = "aa";
//         console.log("a");
//     }, 1000);
// });

// const $today = document.getElementById("today");

// $today.addEventListener("mouseover", ()=> {
//     $today.classList.remove("strong");
// });

// $today.addEventListener("click", ()=> {
//     $today.classList.add("strong");
// });

// const $today = document.getElementById("today");
// const $subtitles = document.getElementsByClassName("subtitle");

// 自分自身を削除
// $today.parentNode.removeChild($today);

// 子要素を削除
// $today.removeChild($subtitles[0]);

// const $today = document.getElementById("today");
// const $newText = document.createElement("p");
// $newText.textContent = "hello mother f**ker";

// 子要素の特定のDOMの前に追加
// $today.insertBefore($newText, $today.firstChild);

// 子要素の最後に追加
// $today.appendChild($newText);

// const $listItems = document.getElementsByTagName("li");
// const $target = $listItems[1];

// CSSクラスを削除
// $target.classList.remove("current");

// CSSクラスを追加
//$target.classList.add("strong");

// console.dir($target.classList);

// const $body = document.body;
// $body.style = "backGround: purple;";

// const $title = document.getElementById("title");
// console.log($title.innerText);

// import moment from "moment"

// const myBirthday = moment("1998-11-19");
// const today = moment();
// const diff = today.diff(myBirthday, "day");

// console.log("AI研修いつのまにか終わってたｗ");


// import getTriangleArea from "./_sub";

// console.log(getTriangleArea(10,9));

// const now = new Date();
// const today = now.getDate();
// console.log(`今日は${today}日です。`);