addEventListener("DOMContentLoaded", () => {
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let profile = document.getElementById("user").value;
    fetch(`${e.target.action}${profile}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });
});
