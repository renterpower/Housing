$(function(){
  //Fill Worsheet with address
  $("#step-1 button").click(function(event) {
    var address = $("#street-num").val() + " " + $("#street-dir").val() + " " + $("#street-name").val();
    $("#address").text(address);
  });

  //Fill Worsheet with PIN
  $("#step-2 button").click(function(event) {
    $("#pin").text($("#pinInput").val());
  });

  //Fill Worsheet with Owner
  $("#step-3 button").click(function(event) {
    $("#owner").text($("#ownerInput").val());
  });
});
