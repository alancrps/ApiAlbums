async function saveAlbum(){
    const userId = document.getElementById("userId").value;
    const title = document.getElementById("title").value;

    //verificacion de inputs vacios
    if (userId == 0 || title == ""){
        return alert("los campos no pueden estar vacios")
    }

    // POST 
    // https://jsonplaceholder.typicode.com/albums
    // {
    //     "userId" : 3,
    //     "title": "Probando 4"
    // }
    const data = {"userId":userId, "title":title}
    const dataJson = JSON.stringify(data)
    console.log(data)
    console.log(dataJson)
    //Request
    const response = await fetch('https://jsonplaceholder.typicode.com/albums',{
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body:dataJson
    })

    const responseData = await response.json()

    document.getElementById("respuesta").innerHTML = `
    <p>Se creo correctamente!</p>
    <p>id:${responseData.id} y su titulo es: ${responseData.title}</p>
    `
    document.getElementById("formularioAlbum").reset();
}