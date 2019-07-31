/*ESERCIZIO:
Creare un calendario dinamico con le festività.
Partiamo dal gennaio 2018 dando la possibilità di cambiare mese,
gestendo il caso in cui l’API non possa ritornare festività.
Il calendario partirà da gennaio 2018 e si concluderà a dicembre 2018
(unici dati disponibili sull’API).*/


$(document).ready(function() {

  //compilo il template con handlebars
  var source = $("#template").html();
  var template = Handlebars.compile(source);


  //controllo quanti giorni ha il mese (gennaio)
  var giorniGennaio = moment("2018-01").daysInMonth();
  console.log(giorniGennaio);

  for (var i = 1; i <= giorniGennaio; i++) {
    var jan = moment("2018-01").day(i).format("dddd D MMMM");
    console.log("questo è jan" , jan);

    var context = {giorno: jan};
    var html = template(context);

    //stampo a schermo la lista dei giorni
    $(".lista").append(html);
  }



  var urlHoliday = "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0";

  $.ajax(
    {
      url : urlHoliday,
      method : "GET",
      success : function(data) {
        var festa = data.response;
        console.log(festa);

      },
      error : function (richiesta,stato,errore) {
      alert("E' avvenuto un errore. " + errore);
      }
    }
  );

});
