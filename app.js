let url = "http://universities.hipolabs.com/search?name="


let btn = document.querySelector('button');
let list = document.querySelector('#list');

btn.addEventListener('click', async () => {
    let country = document.querySelector('input').value;
    console.log(country);

    let collArr = await getCollege(country);
    console.log(collArr)
    show(collArr);



})


function show(collArr) {
    list.innerHTML = "";
    for (col of collArr) {
        let college = col.name;
        let li = document.createElement('li');
        li.innerHTML = college;
        list.appendChild(li);
    }
}
async function getCollege(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;

    } catch (error) {
        console.log("ERROR -:", error);
        return [];
    }
}