import http from "http";
import {app} from "./app";

const port = process.env.port || 3000;//process.env.port ในระบบของเครื่องจะกำหนด environment ไว้ ถ้าไม่มีจะกำหนด port 3000 ไว้ //const ประกาศตัวแปร
const server = http.createServer(app); //สร้าง server เก็บใส่ตัวแปร server

server.listen(port, ()=>{

    console.log("Server is Started");
}); //listen() คือฟังก์ชันรอ  //ถ้าเปิด port เสร็จให้จบ