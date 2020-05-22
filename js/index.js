function newNote(title, timeago) {
  let note_item = createElem("div");
  
  note_item.classList.add("note-item");
  setRipple(note_item, 'rgba(255,255,255,.5');
  note_item.innerHTML = 
  `
  <div class="note-item-title">
    ${title}
  </div> 
  <div class = "note-item-created">
    ${timeago}
  </div>
  `;
  notes_cont.push(note_item);
  notes_container.insertBefore(note_item, notes_container.children[0]);
}

if (notes !== null) {
  for (let i = 0; i < notes.length; i++) {
    newNote(notes[i].title, timeSince(notes[i].timeago));
  }
} else {
  notes = [];
}

function newNoteAdd(){
  unic_shadow.classList.add("unic-shadow-toggle");
  index_body.classList.add("index-body-trans");
  new_note.classList.add("new-note-trans");
  new_note.classList.add("new-note-move");
  setTimeout(()=>{
    new_note.classList.add("new-note-pos");
    new_note.classList.remove("new-note-trans");
    refreshTime();
  }, 500);
}

function refreshTime(){
  if(notes_cont.length !== 0){
    for(let i = 0; i < notes_cont.length; i++){
      let timeago = timeSince(notes[i].timeago);
      notes_cont[i].children[1].innerText = `${timeago}`;
    }
  }
}

