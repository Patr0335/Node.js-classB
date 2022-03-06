$(document).ready(function () {
  $(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none",
  });

  $(".zoom").hover(
    function () {
      $(this).addClass("transition");
    },
    function () {
      $(this).removeClass("transition");
    }
  );
});


// Make an HTTP request to the /json/ route of our express server:
fetch("/json")
// Get the request body and convert to JSON:
.then((res)=> res.json())
// Here we have the request body as a JSON object ready to be used:
.then((data)=>{

    console.log( data );

})
.catch(console.error);