//  use let for functions
// use var for global

// important or not icons
const nonImpIcon = "fas fa-star-half";
const impIcon = "fas fa-star";
var isImportant = false;

// toogles importance of task
function toggleImportant() {
  if (isImportant) {
    $("#iImportant").removeClass(impIcon).addClass(nonImpIcon);
    isImportant = false;
  } else {
    $("#iImportant").removeClass(nonImpIcon).addClass(impIcon);
    isImportant = true;
  }
}

// create btn , show/hide form
var isVisible = true; // is true bc form is visible

function toggleForm() {
  if (isVisible) {
    $("#form").fadeOut();
    isVisible = false;
  } else {
    $("#form").fadeIn();
    isVisible = true;
  }
}

function saveTask() {
  // var all inputs
  let title = $("#txtTitle").val();
  let duration = $("#txtDuration").val();
  let deadline = $("#selDeadline").val();
  let theLocation = $("#txtLocation").val();
  let status = $("#selStatus").val();

  let task = new Task(
    0,
    title,
    isImportant,
    duration,
    deadline,
    theLocation,
    status
  );
  console.log(task);

  dispplayTask(task); // display
}

// displaying func
// adds syntax to HTML
function dispplayTask(task) {
  ///// interpolatin task.title to html list div
  let syntax = `<div class='task'>
    <div class='left-col'>
        <h3>${task.title}<h3>  
        <label>${task.isImportant}<label>   
    <div>       
    <label>${task.duration}<label>  
    <label>${task.deadline}<label>                  
    <label>${task.location}<label>          
    <label>${task.status}<label>          
        
  </div>`;

  /// find div  and append syntax
  $("#task-list").append(syntax);
}

function init() {
  // runTest();  //// function attached from test.script
  // load data

  // hook events

  // jQuery get ele by Id // call func
  $("#iImportant").click(toggleImportant);
  $("#btnShowHide").click(toggleForm);
  $("#addTaskBtn").click(saveTask);
}

// loads html first
window.onload = init;