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
    const dataJson = JSON.stringify(data);

    //Request
    const response = await fetch('https://jsonplaceholder.typicode.com/albums',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:dataJson
    })

    const responseData = await response.json()
    console.log(responseData)
    alert(`Se creó correctamente! \nId: ${responseData.userId} con el titulo: ${responseData.title}`)
    document.getElementById("formularioAlbum").reset();
}