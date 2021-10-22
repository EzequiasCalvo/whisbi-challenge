addEventListener("DOMContentLoaded", () => {
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let profile = document.getElementById("user").value;

    fetch(`${e.target.action}${profile}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        // Authorization: "token ghp_KK",
      },
    }).then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json().then((data) => {
          console.log(data.public_repos);
          if (data.public_repos) {
            fetch(`${e.target.action}${profile}/repos`, {
              headers: {
                Accept: "application/vnd.github.v3+json",
                // Authorization: "token ghp_KK",
              },
            })
              .then((response) => response.json())
              .then((data) => {
                console.log("here", data);
                console.log("len", data.length);
                const repos = document.querySelector("#repos");

                console.log(repos, "repos");
                for (let i = 0; i < data.length; i++) {
                  // Create elements
                  const div = document.createElement("div");
                  const rowOne = document.createElement("div");
                  const rowTwo = document.createElement("div");
                  const firstInnerColumn = document.createElement("div");
                  const secondInnerColumn = document.createElement("div");
                  const circle = document.createElement("div");
                  const desc = document.createElement("p");
                  const svg = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "svg"
                  );
                  const path = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path"
                  );
                  const project = document.createElement("p");
                  const visibility = document.createElement("p");

                  // Set attr and classes
                  svg.setAttribute("viewBox", "0 0 16 16");
                  svg.setAttribute("aria-hidden", "true");
                  svg.setAttribute("height", "16px");
                  svg.setAttribute("data-view-component", "true");
                  path.setAttribute(
                    "d",
                    "M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                  );
                  path.setAttribute("fill-rule", "evenodd");
                  div.classList.add("cards");
                  rowOne.classList.add("row-one");
                  rowTwo.classList.add("row-two");
                  firstInnerColumn.classList.add("inner-one");
                  secondInnerColumn.classList.add("inner-two");
                  circle.classList.add("circle");
                  desc.classList.add("desc");
                  svg.classList.add("svg");
                  project.classList.add("project");
                  visibility.classList.add("visibility");

                  // Display data
                  project.innerText = data[i].name;
                  visibility.innerText = data[i].visibility;
                  desc.innerText = data[i].description;

                  // Add elements to DOM
                  svg.appendChild(path);
                  firstInnerColumn.appendChild(svg);
                  firstInnerColumn.appendChild(project);
                  secondInnerColumn.appendChild(visibility);
                  rowOne.appendChild(firstInnerColumn);
                  rowOne.appendChild(secondInnerColumn);
                  rowTwo.appendChild(circle);
                  rowTwo.appendChild(desc);
                  div.appendChild(rowOne);
                  div.appendChild(rowTwo);
                  repos.appendChild(div);
                }
              });
          }
        });
      } else {
        // add error return throw new error
        console.log("not found");
      }
    });
  });
});
