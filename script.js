let loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
  .then((res) => res.json())
  .then(dets => displayLessons(dets.data) );  
};

let loadLevelWord = (id) => {
    fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    .then(res => res.json())
    .then((dets) => {

        // select all the lessons btn and remove active class from all the lessons btn
        const allLessonBtn = document.querySelectorAll(".lesson-btn")
        allLessonBtn.forEach(elem => {
            elem.classList.remove('active');
        });

        // Add active | user understand what button they clicked
        const clickBtn = document.getElementById(`lesson-btn-${id}`);
        clickBtn.classList.add("active");

        displayVocab(dets.data);
    });
};


let loadWordDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/word/${id}`)
    .then(res => res.json())
    .then(dets => displayModalCards(dets.data));
};

let displayModalCards = (dets) => {
    let modalDets = document.getElementById('modal-dets');
    modalDets.innerHTML = `
        <h2 class="text-2xl font-semibold">${dets.word} (<i class="fa-solid fa-microphone-lines"></i>:${dets.pronunciation})</h2>
                <div class="space-y-1">
                    <p class="font-semibold text-md">Meaning</p>
                    <p class="bangla">${dets.meaning}</p>
                </div>

                <div class="space-y-1">
                    <p class="font-semibold text-md">Example</p>
                    <p>${dets.sentence}</p>
                </div>

                <div class="space-y-1">
                    <p class="bangla">সমার্থক শব্দ গুলো</p>
                    <div>
                        <button class="btn btn-soft btn-primary btn-sm">${dets.synonyms[0]}</button>
                        <button class="btn btn-soft btn-primary btn-sm">${dets.synonyms[1]}</button>
                        <button class="btn btn-soft btn-primary btn-sm">${dets.synonyms[2]}</button>
                    </div>
                </div>
    `

    let mainModal = document.getElementById('my_modal_5').showModal();



}

let displayVocab = (words) => {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = "";

    if(!words || words.length === 0) {
        let div = document.createElement('div');
        div.className = "col-span-3  text-center space-y-2";
        div.innerHTML = `
                <img class="mx-auto" src="./assets/alert-error.png" alt="alert logo">
                <p class="bangla text-[#79716B] text-sm">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <h2 class="text-2xl font-semibold">নেক্সট Lesson এ যান</h2>
                ` 
            wordContainer.append(div);
        return;
    }    
            
    for(let word of words) {
        let div = document.createElement('div');
        div.className = "text-center bg-white px-5 py-7 space-y-3 rounded-lg";
        div.innerHTML = `
            <h2  class="text-xl font-bold">${word.word ? word.word : 'তথ্য পাওয়া যায়নি'}</h2>
            <p class="text-sm font-medium">"Meaning / Pronounciation"</p>
            <h2 class="text-xl text-[#464649] font-bold">${word.meaning ? word.meaning : 'তথ্য পাওয়া যায়নি'} / ${word.pronunciation ? word.pronunciation : 'তথ্য পাওয়া যায়নি'}</h2>
            <div class="flex justify-between">
                <div onclick="loadWordDetails(${word.id})" class="btn btn-soft btn-primary btn-sm ">
                    <i class="fa-solid fa-circle-info"></i>
                </div>
                <div class="btn btn-soft btn-primary btn-sm ">
                    <i class="fa-solid fa-volume-high"></i>
                </div>
            </div>
        `
        wordContainer.append(div);
    }
};

let displayLessons = (lessons) => {
    const lessonsDiv = document.getElementById('lessonsDiv');
    lessonsDiv.innerText = "";

    for(let lesson of lessons) {
        const lessonbtn = document.createElement('div');
        lessonbtn.innerHTML = `
        <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary btn-sm lesson-btn"><i class="fa-solid fa-book-open"></i> Lesson -${lesson.level_no}</button>
        `;
        lessonsDiv.append(lessonbtn);
    }
};

loadLessons();

