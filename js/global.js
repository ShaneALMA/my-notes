//globals
let notes_cont = [];
let notes = JSON.parse(localStorage.getItem('notes'));

//index
let index_body = getElem(".index-body");

let floating_new_note = getElem(".floating-new-note");

let main_title = getElem(".main-title");

let main_opts = getElem(".main-opts");

let header_items = getElemAll(".header-item");

let notes_container = getElem(".notes-container");

let unic_shadow = getElem(".unic-shadow");

//new note
let new_note = getElem(".new-note");

let new_opts_float = getElem(".new-opts-float");

let note_form = getElem(".note-form");

let shadow_note = getElem(".shadow-note");

let close_msg = getElem(".close-msg");

let reply_cont = getElem(".reply-cont");

//show note
let show_title = getElem(".show-title");
let show_opts_float = getElem('.show-opts-float');

let show_body = getElem('.show-body');