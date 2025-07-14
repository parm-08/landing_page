document.getElementById("subscribeForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for subscribing!");
    this.reset();
  });
  
  function scrollToCollections() {
    document.getElementById("collections").scrollIntoView({ behavior: "smooth" });
  }
  
