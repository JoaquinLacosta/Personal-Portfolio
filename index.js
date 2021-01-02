const header = document.querySelector("#header")
const header_icon = document.querySelector("#header_icon")
const about = document.querySelector("#about")
const proyects = document.querySelector("#proyects")
const courses = document.querySelector("#courses")
const contact = document.querySelector("#contact")

header_icon.addEventListener("touchstart", hideShow)
about.addEventListener("touchstart", hideShow)
proyects.addEventListener("touchstart", hideShow)
courses.addEventListener("touchstart", hideShow)
contact.addEventListener("touchstart", hideShow)

function hideShow () {
    if(header.classList.contains("is-active")) {
        header.classList.remove("is-active")
    }else {
        header.classList.add("is-active")
    }
}