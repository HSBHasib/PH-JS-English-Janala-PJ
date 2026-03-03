let loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
  .then((res) => res.json())
  .then(dets => displayLessons(dets.data) );  
};

let displayLessons = (lessons) => {
    const lessonsDiv = document.getElementById('lessonsDiv');
    lessonsDiv.innerText = "";

    for(let lesson of lessons) {
        const lessonbtn = document.createElement('div');
        lessonbtn.innerHTML = `
        <button class="btn btn-outline btn-primary btn-sm"><i class="fa-solid fa-book-open"></i> Lesson -${lesson.level_no}</button>
        `;
        lessonsDiv.append(lessonbtn);
    }
}

loadLessons();