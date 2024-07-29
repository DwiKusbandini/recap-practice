function validateForm(){
    const nama = document.forms['message-form']['name-input'].value;
    const angka = 11

    if(nama == ''){
        document.getElementById("error-name").innerHTML = "Tidak boleh kosong!"

        return false
    }

    // document.getElementById("name").innerHTML = nama;
    // document.getElementById("error-name").innerHTML = "";
    setName(nama);

    return false;
}

function setName(name) {
    document.getElementById("name").innerHTML = name;
    document.getElementById('error-name').innerHTML = ""
}
// let nameInput = document.getElementById('name-input')

// document.getElementById('kirim').addEventListener("click", function(){
//     const name = nameInput.value
    
//     if (name =="") {
//         document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong!"
//         else {
//             document.getElementById('name').innerHTML = name
//         }
//     }
    
// })


// function replaceName() {
//     let name = prompt ("Siapakah nama anda?", "")
//     document.getElementById("name").innerHTML = name
// }

// document.getElementById('tombol').addEventListener("click", function() {
//     replaceName(); 
// })

// console.log(name); 
// prompt("Halo, siapa nama anda?", ""); // javascript