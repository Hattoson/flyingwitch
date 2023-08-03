document.getElementById('closeBtn').addEventListener('click', function () {
    const isShow = document.getElementById("isShow")
    const side = document.getElementById("side")
    const h3 = document.getElementById("h3")
    isShow.style.opacity = 0
    setTimeout(()=>{
        isShow.style.display = 'none'
        side.style.transform = 'translateX(0)'
        h3.style.transform = 'translateY(0)'
        h3.style.opacity = 1;
    }, 1000)
})
