fetch('https://api.github.com/users/xiaotian/repos').then(
  resp =>  {
    if (resp.headers.get("Content-Type").includes("applicaton/json")) {
      return resp.json()
    } else {
      throw "34"
    }
  }
).then(repos => {
  alert(repos[0].name);
}).catch(ex => {
  alert("5345345");
})
