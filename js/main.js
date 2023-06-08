const darkBtn = document.querySelector('.dark-btn')
const darkModeBtn = document.querySelector('.dark-mode-btn')
const jobsBox = document.querySelector('.jobs-box')
const learnMoreBtn = document.querySelector('.learn-more-btn')
const searchBtn = document.querySelector('.search-btn')
const API = 'https://db-json-one.vercel.app/db.json'

let maxJob = 12

learnMoreBtn.addEventListener('click', ()=> {
    maxJob += 3
    jobsBox.innerHTML = ''
    recFnc()
})

searchBtn.addEventListener('click', ()=> {
    jobsBox.innerHTML = ''
    let filterByTitle = document.querySelector('#title')
    let filterByLocated = document.querySelector('#location')
    fetch(API)
    .then((res)=> res.json())
    .then((datas)=> {
        datas.forEach((data, i)=> {
            if(data.title.includes(filterByTitle.value.trim()) && filterByTitle.value.trim() !== ""){
                const item = `
                            <div class="job-box">
                                <img src="${data.logo}" alt="icon image">
                                <div class="job-title">
                                    <p><span>${data.whenPlaced}</span>.<span>${data.workTime}</span></p>
                                    <h3>${data.title}</h3>
                                    <p>${data.companyName}</p>
                                </div>
                                <span>${data.companyCountry}</span>
                            </div>
                            `
                jobsBox.innerHTML += item
                console.log(filterByLocated);
            }else if(filterByTitle.value.trim() === "" && i === 0) {
                recFnc()
            }
        })
    })
})

const recFnc = ()=> {
    fetch(API)
    .then((res)=> res.json())
    .then((datas)=> {
        datas.forEach((data,i)=> {
            if(i < maxJob){
                const item = `
                            <div class="job-box">
                                <img src="${data.logo}" alt="icon image">
                                <div class="job-title">
                                    <p><span>${data.whenPlaced}</span>.<span>${data.workTime}</span></p>
                                    <h3>${data.title}</h3>
                                    <p>${data.companyName}</p>
                                </div>
                                <span>${data.companyCountry}</span>
                            </div>
                            `
                jobsBox.innerHTML += item
            }
        })

    })
    .catch(()=> {
        console.error('error');
    })
}

recFnc()









darkBtn.addEventListener('click', ()=> {
    darkModeBtn.classList.toggle('dark-mode-btn-click')
})