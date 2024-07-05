let opacityValue = 0.2;

console.log("Sanity Check!");
let projectData = JSON.parse(document.getElementById('project-data').textContent);


console.log(projectData);

function filterProjects(content) {


    switch (content)
    {
        case "Professional":

            console.log("Filtering projects to only show: ", content);

            //set the professional button to grayed out.
            let professional_tab = document.getElementById("professional_projects");

            console.log(professional_tab);
            professional_tab.style.opacity = String(0.33);

            break;
    }

}