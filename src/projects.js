let projects, errored;
let api_key = process.env.REACT_APP_API_KEY;

let res = await fetch(`https://somber-jewel-fukuiraptor.glitch.me/api?api_key=${api_key}`)
    .catch((error) => { errored = true; console.log(error); });

if (!errored && res.status === 200) {
    projects = await res.json();
    console.log("SUCCESSFULLY FETCHED ALL THE PROJECTS");
}
else {
    projects = [];
}
export default projects;