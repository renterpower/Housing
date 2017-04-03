$(function() {
  var autocomplete = new google.maps.places.Autocomplete(document.getElementById('addressAutocomplete'), {types: ['geocode']});
  autocomplete.addListener('place_changed', generateURL);
  autocomplete.addListener('place_changed', autoFillAddress);

  function generateURL() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();
    var number = place.address_components[0].short_name;
    var street = place.address_components[1].short_name;
    var dir = street.substring(0,1);
    street = street.substring(2, street.length - 2);  // not working for some locations, TODO: better way to filter suffix.

    var url = 'http://newschicago.org/index.php?menu=chicago&search=single_chicago&search_by=address&';
    url += 'stnum=' + number + '&dir=' + dir + "&stname=" + street;

    $('#url').html('<a href="' + url + '"target="_blank">Open this website to grab your PIN</a>');
    $('#url').removeClass('hidden');
  }

  //Fill Worsheet with address
  function autoFillAddress() {
    $("#address").text($("#addressAutocomplete").val());
  }


  //Fill Worsheet with PIN
  $("#step-2 button").click(function(event) {
    $("#pin").text($("#pinInput").val());
  });

  //Fill Worsheet with Owner
  $("#step-3 button").click(function(event) {
    $("#owner").text($("#ownerInput").val());
  });
});
