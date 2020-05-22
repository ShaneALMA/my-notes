let title = note_form.children[0];
let body = note_form.children[1];

body.addEventListener('click', e => {
  new_opts_float.classList.add('new-opts-float-toggle');
});

function newNoteRemove() {
  new_note.classList.add("new-note-trans");
  new_note.classList.remove("new-note-pos");
  new_note.classList.remove("new-note-move");
  unic_shadow.classList.remove("unic-shadow-toggle");
  index_body.classList.remove("index-body-trans");
  
  setTimeout(() => {
    new_note.classList.remove("new-note-trans");
    clearFields();
  }, 400);
}

function showMsgClose() {
  shadow_note.classList.toggle("shadow-note-toggle");
  close_msg.classList.toggle("close-msg-toggle");
}

function beforeCloseNote() {
  if (title.value !== "" || body.value !== "") {
    showMsgClose();
  } else {
    newNoteRemove();
  }
}

async function saveNote(){
  let note_title = title.value;
  let note_body = body.value;
  
  if(note_title === ""){
    note_title = "Nota sin nombre";
  }
  
  let date = new Date();
  let note = {
    title : note_title,
    body : note_body,
    timeago : Date.now(),
    fulldate : getFormatDate(date.getDay(),date.getDate(),date.getMonth(),date.getFullYear(),date.getHours(),date.getMinutes(),date.getSeconds())
  }
  notes.push(note);
  localStorage.setItem('notes', JSON.stringify(notes));
  
  let timeago = timeSince(Date.now());
  await newNote(note_title, timeago);
  
}

function getFormatDate(day, date, month, year, hour, min, sec){
  
  const months = [
    'Enero','Febrero','Marzo','Abril',
    'Mayo','Junio','Julio','Agosto',
    'Septiembre','Octubre',
    'Noviembre','Diciembre'
    ];

  const days = [
    'Domingo','Lunes','Martes',
    'Miércoles','Jueves','Viernes',
    'Sábado'
    ];
    
  let ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour ? hour : 0; 
  min = min < 10 ? '0' + min : min;
    
  return `Creado el ${days[day]} ${date} de ${months[month]} del ${year} a las ${hour}:${min}:${sec} ${ampm}`;
}

function clearFields(){
  setTimeout(() => {
    title.value = '';
    body.value = '';
  }, 500);
}