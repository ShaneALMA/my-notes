<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

  <title>HTML</title>
 
  <link rel="stylesheet" href="css/global.css">
  
  <link rel="stylesheet" href="css/index.css">
  <link rel="stylesheet" href="css/new-note.css">
  <link rel="stylesheet" href="css/show-note.css">
  
  <link rel="stylesheet" href="css/ripple.css">
  
  <link rel="manifest" href="manifest.json">
  
</head>

<body>
  
  <div class="unic-bg">
    
  </div>
  
  <div class="index-body">
    
    <div class="super-bar">
      
      <div class="topbar">
        
        <h1 class="main-title">Mis Notas</h1>
        
        <div class="main-opts">
          
          <div class="opt-item">
            <img class="opt-icon" src="img/themes.svg" />
          </div>
          <div class="opt-item">
            <img style="width:25px" class="opt-icon" src="img/more.svg" />
          </div>
          
        </div>
        
      </div><!-- topbar -->
      
      <div class="headers">
        
        <div onclick="getFormatDate()" class="header-item">
          Principal
        </div>
        <div class="div-header">
        </div>
        <div class="header-item">
          Compartido
        </div>
        <div class="div-header">
        </div>
        <div class="header-item">
          Buscar
        </div>
        
      </div><!-- headers -->
      
    </div><!-- super-bar -->
    
    <div class="notes-container">
    </div>
    
  </div><!-- index-body -->
  
  <div onclick="newNoteAdd()" class="floating-new-note">
    <img class="new-note-icon" src="img/plus.svg" />
  </div>
  
  <div class="unic-shadow">
    
  </div>
  
  <div class="new-note">
    
    <form class="note-form">
      
      <div class="title-inp-cont">
        <input placeholder="título" />
      </div>
      
      <textarea placeholder="ingresa tus apuntes"></textarea>
      
    </form>
    
    <div class="new-opts-float">
      
      <div onclick="saveNote(),newNoteRemove()" class="new-opt-item">
        <img style="width:20px" class="opt-icon" src="img/save.svg" />
      </div>
      
      <div onclick="beforeCloseNote()" class="new-opt-item">
        <img style="width:20px" class="opt-icon" src="img/close.svg" />
      </div>
      
    </div><!-- new-opts-float -->
    
    <div class="shadow-note">
      
      <div class="close-msg">
        La nota actual contiene un texto.
        
        <div class="reply-cont">
          
          <div onclick="showMsgClose(),newNoteRemove()" class="reply-item">
            Borrar
          </div>
          <div onclick="saveNote(),showMsgClose(),newNoteRemove()" class="reply-item">
            Guardar
          </div>
          <div onclick="showMsgClose()" class="close-img-cont">
            <img class="close-img" src="img/close.svg" />
          </div>
          
        </div><!-- reply-cont -->
      
      </div><!-- close-msg -->
    
    </div><!-- shadow-note -->
    
  </div><!-- new-note -->
  
  <div class="show-note">
    
    <div class="show-bar">
      
      <h2 class="show-title">
        Nombre de nota desde el array del local storage
      </h2>
      
      <div class="show-created">
        Creado el 15 de Abril, 2018 a las 9:56:07 AM
      </div><!-- show-created -->
      
    </div><!-- show-bar -->
    
    <div class="show-body">
      Éste es un texto de prueba para testaer el CSS en tiempo real. Éste es un texto de prueba para testaer el CSS en tiempo real. Éste es un texto de prueba para testaer el CSS en tiempo real. Éste es un texto de prueba para testaer el CSS en tiempo real. Éste es un texto de prueba para testaer el CSS en tiempo real.
      Éste es un texto de prueba para testaer el CSS en tiempo real.Éste es un texto de prueba para testaer el CSS en tiempo real.Éste es un texto de prueba para testaer el CSS en tiempo real. Éste es un texto de prueba para testaer el CSS en tiempo real.Éste es un texto de prueba para testaer el CSS en tiempo real.Éste es un texto de prueba para testaer el CSS en tiempo real.
      Éste es un texto de prueba para testaer el CSS en tiempo real.Éste es un texto de prueba para testaer el CSS en tiempo real.Éste es un texto de prueba para testaer el CSS en tiempo real.
      Éste es un texto de prueba para testaer el CSS en tiempo real.Éste es un texto de prueba para testaer el CSS en tiempo real.Éste es un texto de prueba para testaer el CSS en tiempo real.
    </div>
    
    <div class="show-opts-float">
      <div class="show-opt-item">
        <img class="opt-icon" src="img/edit.svg">
      </div>
      <div class="show-opt-item">
        <img class="opt-icon" src="img/delete.svg">
      </div>
    </div>
    
    <div class="shadow-show">
      
      <div class="show-msg-del">
        Atención! La nota actual se eliminará.
        <div class="del-reply-cont">
          
          <div onclick="showMsgClose(),newNoteRemove()" class="del-reply-item">
            Cancelar
          </div>
          <div onclick="saveNote(),showMsgClose(),newNoteRemove()" class="del-reply-item">
            Eliminar
          </div>
          
        </div><!-- del-reply-cont -->
      
      </div><!-- show-msg-del -->
      
    </div><!-- shadow-show -->
    
  </div><!-- show-note -->
  
  <script src="js/functions.js"></script>
  
  <script src="js/timeago.js"></script>
  
  <script src="js/global.js"></script>
  
  <script src="js/ripple.js"></script>
  
  <script src="js/index.js"></script>
  <script src="js/new-note.js"></script>
  <script src="js/show-note.js"></script>
  
</body>
</html>