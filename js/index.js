var nameInput = document.getElementById("fnam")
var phoneInput = document.getElementById("phon")
var emilInput = document.getElementById("emil")
var adreesInput = document.getElementById("adrees")
var groupInput = document.getElementById("group")
var notInput = document.getElementById("not")
var searching = document.getElementById("serach")
var aadddd = document.getElementById("add")
var upp = document.getElementById("uppppp")
var ProductImage = document.getElementById("ProductImage")
var savHart = document.getElementById("cleeeeen")
var savvvHart = document.getElementById("adet")

var prodactlist = []

if (JSON.parse(localStorage.getItem("prodacttttt")) !== null) {
    prodactlist = JSON.parse(localStorage.getItem("prodacttttt"))
}
else {
    prodactlist = []
}
maaaab()


function addprodact(event) {
    event.preventDefault();

    if (
        validation(nameInput, "msgname") &&
        validation(phoneInput, "msgnumber") &&
        validation(emilInput, "msgemeil")

    ) {
        var prodact = {
            id: Date.now(),
            name: nameInput.value,
            phone: phoneInput.value,
            emil: emilInput.value,
            adrees: adreesInput.value,
            group: groupInput.value,
            not: notInput.value,
            image: ProductImage.files[0] ? `imgs/${ProductImage.files[0]?.name}` : "imgs/course/01.jpg",

            heart: document.getElementById("Emergency").checked,
            star: document.getElementById("Favorite").checked
        }

        console.log(prodact);

        prodactlist.push(prodact)
        localStorage.setItem("prodacttttt", JSON.stringify(prodactlist))
        console.log(prodactlist);


        cleer()
        maaaab()
        renderFavorites()
        renderEmergency()
        updateCounters()
        Swal.fire({
            title: 'success',
            text: 'your information is true',
            icon: 'success',
            confirmButtonText: 'goood'
        })
    }
    else {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }







}


function cleer() {
    nameInput.value = ""
    phoneInput.value = ""
    emilInput.value = ""
    adreesInput.value = ""
    groupInput.value = ""
    notInput.value = ""


    nameInput.classList.remove("is-valid")
    phoneInput.classList.remove("is-valid")
    emilInput.classList.remove("is-valid")

    document.getElementById("Favorite").checked = false
    document.getElementById("Emergency").checked = false




}


function maaaab() {
    var cartona = ""
    for (var i = 0; i < prodactlist.length; i++) {
        cartona += `                            <div  class="col-6 p-3 rounded-4 boooooox bg-white">
                                <div class="d-flex align-items-center">
                                    <Div class="w-img me-2 ">
                                        <img src="${prodactlist[i].image}" class="w-100 rounded-3" alt="your img">

                                    </Div>
                                    <div>
                                        <div class="nameee"><span>${prodactlist[i].name}</span></div>
                                        <div>
                                            <span class="phoooooooon"><i class="fa-solid fa-phone fa-2xs"
                                                    style="color: rgb(8, 70, 206);"></i></span>
                                            <span>${prodactlist[i].phone}</span>
                                        </div>
                                    </div>

                                </div>
                                <br>
                                <div>
                                    <span class="emeeeel"><i class="fa-solid fa-envelope fa-2xs"
                                            style="color: rgb(121, 8, 206);"></i></span>
                                    <span>${prodactlist[i].emil}</span>
                                </div>
                                <br>
                                <div>
                                    <span class="looooooca"><i class="fa-solid fa-location-dot fa-2xs"
                                            style="color: rgb(29, 206, 8);"></i></span>
                                    <span>${prodactlist[i].adrees}</span>

                                </div>
                                <br>
                                <div>
                                    <span class="frindes">${prodactlist[i].group}</span>
                                </div>
                                <br>
                                <Div class="d-flex align-items-center justify-content-between booooor pt-2">
                                    <div class="d-flex align-items-center  justify-content-evenly w-25">
                                        <div class="phoone"><i class="fa-solid fa-phone fa-xs"></i></div>
                                        <div class="emy"><i class="fa-solid fa-envelope fa-xs"></i></div>
                                    </div>
                                    <div class="d-flex align-items-center text-secondary   ">
                                        <div class="staaaaaar"><i onclick="staaar(${i})"  class="fa-${prodactlist[i].star ? "solid" : "regular"} fa-star fa-xs"  style="color: ${prodactlist[i].star ? '#ffd43b' : '#6c757d'};"  ></i></div>
                                        <div class="haaaaaaaart"><i onclick="hart(${i})"  class="${prodactlist[i].heart ? 'fa-solid fa-heart-pulse' : 'fa-regular fa-heart'} fa-xs" style="color: ${prodactlist[i].heart ? '#ff3b3b' : '#6c757d'};"></i></div>
                                        <div class="peeeeeen"><i class="fa-solid fa-pen fa-xs"  onclick="abdate(${i})"></i></div>
                                        <div class="dely"><i onclick="delet(${i})" class="fa-solid fa-trash fa-xs "></i></div>
                                    </div>
                                </Div>

                            </div>`
    }
    document.getElementById("mohamed").innerHTML = cartona
}
function renderFavorites() {

    var cartona = ""

    for (var i = 0; i < prodactlist.length; i++) {

        if (prodactlist[i].star) {

            cartona += `
                <div class="d-flex align-items-center justify-content-between w-75 m-auto p-2 buououot">

                    <div class="d-flex align-items-center">

                        <div class="w-img me-2">
                            <img 
                                src="${prodactlist[i].image}" 
                                class="w-100 rounded-3"
                                alt="your photo">
                        </div>

                        <div>
                            <span class="nameee">
                                ${prodactlist[i].name}
                            </span>
                            <br>
                            <span>
                                ${prodactlist[i].phone}
                            </span>
                        </div>

                    </div>

                    <div class="mobil">
                        <i class="fa-solid fa-phone fa-xs"></i>
                    </div>

                </div>
            `
        }
    }

    document.getElementById("sttttar").innerHTML = cartona
}
function renderEmergency() {

    var cartona = ""

    for (var i = 0; i < prodactlist.length; i++) {

        if (prodactlist[i].heart) {

            cartona += `
                <div class="d-flex align-items-center justify-content-between w-75 m-auto p-2 buououoteee">

                    <div class="d-flex align-items-center">

                        <div class="w-img me-2">
                            <img 
                                src="${prodactlist[i].image}" 
                                class="w-100 rounded-3"
                                alt="your photo">
                        </div>

                        <div>
                            <span class="nameee">
                                ${prodactlist[i].name}
                            </span>
                            <br>
                            <span>
                                ${prodactlist[i].phone}
                            </span>
                        </div>

                    </div>

                    <div class="mobileee">
                        <i class="fa-solid fa-phone fa-xs"></i>
                    </div>

                </div>
            `
        }
    }

    document.getElementById("herttt").innerHTML = cartona
}
function updateCounters() {

    var counters = document.querySelectorAll(".zero")

    var total = prodactlist.length

    var favorites = 0

    var emergency = 0

    for (var i = 0; i < prodactlist.length; i++) {

        if (prodactlist[i].star) {
            favorites++
        }

        if (prodactlist[i].heart) {
            emergency++
        }
    }

    counters[0].innerHTML = total
    counters[1].innerHTML = favorites
    counters[2].innerHTML = emergency
}

function delet(index) {

   Swal.fire({
    icon: "warning",
    title: "Delete Contact?",
    text: `Are you sure you want to delete ${prodactlist[index].name}?`,
    showCancelButton: true,
    confirmButtonText: "Yes, delete it",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#dc3545"
}).then((result) => {

        if (result.isConfirmed) {

            prodactlist.splice(index, 1)

            localStorage.setItem("prodacttttt", JSON.stringify(prodactlist))

            maaaab()
            renderFavorites()
            renderEmergency()
            updateCounters()

            Swal.fire({
                icon: "success",
                title: "Delete",
                text: "Contact deleted successfully"
            })
        }

    })
}

var item;

function abdate(index) {

    item = index

    nameInput.value = prodactlist[index].name
    phoneInput.value = prodactlist[index].phone
    emilInput.value = prodactlist[index].emil

    document.getElementById("Favorite").checked =
        prodactlist[index].star

    document.getElementById("Emergency").checked =
        prodactlist[index].heart

    aadddd.classList.add("d-none")
    upp.classList.remove("d-none")
}

function apdat() {

    prodactlist[item].name = nameInput.value
    prodactlist[item].phone = phoneInput.value
    prodactlist[item].emil = emilInput.value
    prodactlist[item].adrees = adreesInput.value
    prodactlist[item].group = groupInput.value
    prodactlist[item].not = notInput.value

    prodactlist[item].star =
        document.getElementById("Favorite").checked

    prodactlist[item].heart =
        document.getElementById("Emergency").checked

    localStorage.setItem(
        "prodacttttt",
        JSON.stringify(prodactlist)
    )

    maaaab()
    renderFavorites()
    renderEmergency()
    updateCounters()

    cleer()

    aadddd.classList.remove("d-none")
    upp.classList.add("d-none")

    Swal.fire({
        title: 'success',
        text: 'your information is true',
        icon: 'success',
        confirmButtonText: 'goood'
    })
}


function serach() {
    var mabruok = searching.value
    var cartona = ""
    for (i = 0; i < prodactlist.length; i++) {

        if (prodactlist[i].name.toLocaleLowerCase().includes(mabruok.toLocaleLowerCase())) {
            cartona += `                   <div  class="col-6 p-3 rounded-4 boooooox bg-white">
                                <div class="d-flex align-items-center">
                                    <Div class="w-img me-2 ">
                                        <img src="${prodactlist[i].image}" class="w-100 rounded-3" alt="your img">

                                    </Div>
                                    <div>
                                        <div class="nameee"><span>${prodactlist[i].name}</span></div>
                                        <div>
                                            <span class="phoooooooon"><i class="fa-solid fa-phone fa-2xs"
                                                    style="color: rgb(8, 70, 206);"></i></span>
                                            <span>${prodactlist[i].phone}</span>
                                        </div>
                                    </div>

                                </div>
                                <br>
                                <div>
                                    <span class="emeeeel"><i class="fa-solid fa-envelope fa-2xs"
                                            style="color: rgb(121, 8, 206);"></i></span>
                                    <span>${prodactlist[i].emil}</span>
                                </div>
                                <br>
                                <div>
                                    <span class="looooooca"><i class="fa-solid fa-location-dot fa-2xs"
                                            style="color: rgb(29, 206, 8);"></i></span>
                                    <span>${prodactlist[i].adrees}</span>

                                </div>
                                <br>
                                <div>
                                    <span class="frindes">${prodactlist[i].group}</span>
                                </div>
                                <br>
                                <Div class="d-flex align-items-center justify-content-between booooor pt-2">
                                    <div class="d-flex align-items-center  justify-content-evenly w-25">
                                        <div class="phoone"><i class="fa-solid fa-phone fa-xs"></i></div>
                                        <div class="emy"><i class="fa-solid fa-envelope fa-xs"></i></div>
                                    </div>
                                    <div class="d-flex align-items-center text-secondary   ">
                                       <div class="staaaaaar">
                                            <i
                                                onclick="staaar(${i})"
                                                class="fa-${prodactlist[i].star ? "solid" : "regular"} fa-star fa-xs"
                                                style="color: ${prodactlist[i].star ? '#ffd43b' : '#6c757d'};">
                                            </i>
                                        </div>

                                        <div class="haaaaaaaart">
                                            <i
                                                onclick="hart(${i})"
                                                class="${prodactlist[i].heart ? 'fa-solid fa-heart-pulse' : 'fa-regular fa-heart'} fa-xs"
                                                style="color: ${prodactlist[i].heart ? '#ff3b3b' : '#6c757d'};">
                                            </i>
                                        </div>
                                        <div class="peeeeeen"><i class="fa-solid fa-pen fa-xs"></i></div>
                                        <div class="dely"><i onclick="delet(${i})" class="fa-solid fa-trash fa-xs "></i></div>
                                    </div>
                                </Div>

                            </div>`
        }
    }
    document.getElementById("mohamed").innerHTML = cartona

}



function hart(index) {

    prodactlist[index].heart = !prodactlist[index].heart

    localStorage.setItem(
        "prodacttttt",
        JSON.stringify(prodactlist)
    )

    maaaab()
    renderFavorites()
    renderEmergency()
    updateCounters()
}

function staaar(index) {

    prodactlist[index].star = !prodactlist[index].star

    localStorage.setItem(
        "prodacttttt",
        JSON.stringify(prodactlist)
    )

    maaaab()
    renderFavorites()
    renderEmergency()
    updateCounters()
}








function validation(element, msgid) {

    var text = element.value
    var regex = {
        fnam: /^[A-Za-z\s]+$/,
        phon: /^01[0125][0-9]{8}$/,
        emil: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

    }
    var msgid = document.getElementById(msgid)
    if (regex[element.id].test(text)) {
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
        msgid.classList.add("d-none")
        return true

    }
    else {
        element.classList.add("is-invalid")
        element.classList.remove("is-valid")
        msgid.classList.remove("d-none")
        return false

    }


}