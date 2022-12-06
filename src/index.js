import app from "./app"

const main=()=>{
    app.listen(app.get("port"));
    console.log(`Connect to server  ${app.get("port")}`);
};

main();