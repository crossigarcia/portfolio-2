$("#dinner-modal").on("shown.bs.modal", function () {
  $(".modal-dialog").trigger("focus");
});

$('#proj-card').on('click', function(){
   $("#dinner-modal").modal(options);
});