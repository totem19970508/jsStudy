const DI_URL = "http://10.0.1.254/api/slot/0/io/di"
const DO_URL = "http://10.0.1.254/api/slot/0/io/relay"
const HEADERS = {
    'Accept': 'vdn.dac.v1',
    'Content-Type': 'application/json',
}

let diArr = [0,0,0,0,0,0];
let doArr;
let doBody;
let dos;

async function getDoArr() {
    let data = await get(DO_URL);
    console.log(data);
    doBody = data;
    console.log(doBody);
    return data.io.relay.map(x => x.relayStatus);
}

async function init() {
    drawDi(diArr)
    doArr = await getDoArr()
    updateDo(doArr)
}

async function get(url) {
    try {
        const res = await fetch(url, {method: "GET", headers: HEADERS });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

function toggle(i) {
    let finalStatus = doBody.io.relay[i].relayStatus === 0 ? 1 : 0
    doBody.io.relay[i].relayStatus = finalStatus
    if (put(DO_URL, doBody)) {
        dos[i].classList.remove("on", "off")
        dos[i].classList.add(finalStatus === 0 ? "off" : "on")
    }
}

function updateDo(arr) {
    dos = document.querySelectorAll("#do_loc .box")
    dos.forEach((x, i) => {
        x.classList.add( arr[i] === 0 ? "off" : "on")
    })
}

async function put(url, body) {
    const res = await fetch(url, {method: "PUT", headers: HEADERS, body: JSON.stringify(body) });
    return res.ok;
}

function drawDi(arr) {
    let di = document.querySelector("#di")
    di.innerHTML = ""
    arr.forEach((x, i) => {
        let div = document.createElement("div")
        div.classList.add("box")
        if (x == 0) {
            div.classList.add("off")
        } else {
            div.classList.add("on")
        }
        div.innerHTML = `DI - ${i}`
        di.appendChild(div)
    })
}

init();

setInterval(async () => {
    let data = await get(DI_URL)
    let tmpArr = data.io.di.map(x => x.diStatus)
    if (tmpArr != diArr) {
        drawDi(tmpArr)
        diArr = tmpArr
    }4
}, 1000)

e4df