import Cookies from "universal-cookie";

export const validate=async()=>{

const cookie=new Cookies();

const token=cookie.get("token_id");
const user=cookie.get("user_id");
if (token_id || user_id) {

    // By the way heders are not needed
    let headersList = {
        "Accept": "*/*",
        "token_id": token_id // Currently i am passing login token by headers, but i have pass login token via cookie

    }

    // making the post request
    let response = await fetch("http://localhost:5000/Auth", {
        method: "POST",
        headers: headersList,
    });

    let data = await response.json();

 console.log(data);

} else {
    return "notLogged"
}
}




