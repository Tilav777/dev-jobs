const darkBtn = document.querySelector('.dark-btn')
const darkModeBtn = document.querySelector('.dark-mode-btn')
const jobsBox = document.querySelector('.jobs-box')
const learnMoreBtn = document.querySelector('.learn-more-btn')
const API = 'https://db-json-one.vercel.app/db.json'

let maxJob = 12

learnMoreBtn.addEventListener('click', ()=> {
    maxJob = 30
    jobsBox.innerHTML = ''
    recFnc()
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