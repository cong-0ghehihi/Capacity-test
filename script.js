document.addEventListener("DOMContentLoaded", () => {
  const dropdownHeaders = document.querySelectorAll(".dropdown-header");

  dropdownHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      dropdownHeaders.forEach((h) => {
        console.log("H",h);
        console.log("This", this);
        
        
        const content = h.nextElementSibling;
        const icon = h.querySelector("img");

        if (content !== this.nextElementSibling) {
          content.style.display = "none";
          icon.style.transform = "rotate(0deg)";
        }
      });

      const content = this.nextElementSibling;
      const icon = this.querySelector("img");
      content.style.display =
        content.style.display === "block" ? "none" : "block";

      icon.style.transform =
        content.style.display === "block" ? "rotate(180deg)" : "rotate(0deg)";
    });
  });
});
