document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});





const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}


document.addEventListener("DOMContentLoaded", async () => {
    const projectGrid = document.getElementById('project-grid');
    const showMoreBtn = document.getElementById('show-more-btn');
    const githubUser = 'rreactjsx'; // Replace with your GitHub username

    let allRepos = [];
    let displayedRepos = 0;
    const reposPerPage = 6;
    let isLoading = false; // Flag to indicate loading state

    // Fetch public repositories from GitHub
    const fetchGitHubRepos = async () => {
        try {
            isLoading = true;
            showMoreBtn.disabled = true; // Disable button while loading
            const response = await fetch(`https://api.github.com/users/${githubUser}/repos?type=public`);
            allRepos = await response.json();
            displayProjects(); // Initial display of projects
        } catch (error) {
            console.error('Error fetching GitHub repositories:', error);
        } finally {
            isLoading = false;
            showMoreBtn.disabled = false; // Enable button after loading
        }
    };

    // Function to display projects
    const displayProjects = async () => {
        const end = displayedRepos + reposPerPage;
        const reposToShow = allRepos.slice(displayedRepos, end);

        for (const repo of reposToShow) {
          const projectCard = document.createElement("div");
          projectCard.className =
            "bg-surface text-left p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300 flex flex-col justify-between border border-greenAccent min-h-[260px]";

          // Title
          const projectTitle = document.createElement("h3");
          projectTitle.textContent = repo.name;
          projectTitle.className = "text-white/80 uppercase text-xl font-bold mb-2";

          // Description
          const projectDescription = document.createElement("p");
          projectDescription.textContent =
            repo.description || "No description available.";
          projectDescription.className =
            "text-faded text-sm flex-grow mb-6 line-clamp-3";

          // Button wrapper (pinned to bottom)
          const buttonWrapper = document.createElement("div");
          buttonWrapper.className = "mt-auto pt-4";

          // View Project Button
          const viewButton = document.createElement("a");
          viewButton.href = repo.html_url;
          viewButton.target = "_blank";
          viewButton.textContent = "View Project";
          viewButton.className =
            "inline-block w-full text-center px-4 py-2 text-sm font-extrabold bg-greenAccent/20 text-white border-4 border-accent/30 rounded-full hover:bg-accent hover:text-black transition duration-300";

          buttonWrapper.appendChild(viewButton);

          projectCard.appendChild(projectTitle);
          projectCard.appendChild(projectDescription);
          projectCard.appendChild(buttonWrapper);

          projectGrid.appendChild(projectCard);
        }
          

        displayedRepos += reposPerPage;

        // Update button text based on the number of displayed projects
        if (displayedRepos >= allRepos.length) {
            showMoreBtn.textContent = "Show Less";
        } else {
            showMoreBtn.textContent = "Show More";
        }
    };

    // Event listener for the Show More/Less button
    showMoreBtn.addEventListener('click', () => {
        if (isLoading) return; // Ignore clicks while loading

        // Smoothly scroll the button into view
        setTimeout(() => {
            showMoreBtn.scrollIntoView({
                behavior: 'smooth',
                block: 'center' // Center the button in the viewport
            });
        }, 100); // Adjust delay as needed

        if (showMoreBtn.textContent === "Show Less") {
            // Reset to initial state
            projectGrid.innerHTML = '';
            displayedRepos = 0;
            displayProjects();
        } else {
            displayProjects();
        }
    });

    await fetchGitHubRepos();
});




  const header = document.getElementById('main-header');
  const logo = document.getElementById('logo-img');
  const logoWrapper = document.getElementById('logo-wrapper');
  const leftNav = document.getElementById('left-nav');
  const rightNav = document.getElementById('right-nav');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 100;

    if (scrolled) {
      // Shrink header and logo
      header.classList.add('h-16', 'bg-transparent', 'border-none');
      header.classList.remove('h-40', 'bg-surface', 'border-b-4', 'border-accent');

      logo.classList.remove('h-20');
      logo.classList.add('h-10');

      logoWrapper.classList.remove('top-1/2', '-translate-y-1/2');
      logoWrapper.classList.add('top-2');

      // Hide navs
      leftNav.classList.add('opacity-0', 'pointer-events-none', 'invisible');
      rightNav.classList.add('opacity-0', 'pointer-events-none', 'invisible');
    } else {
      // Restore header and logo
      header.classList.remove('h-16', 'bg-transparent', 'border-none');
      header.classList.add('h-40', 'bg-surface', 'border-b-4', 'border-accent');

      logo.classList.remove('h-10');
      logo.classList.add('h-20');

      logoWrapper.classList.add('top-1/2', '-translate-y-1/2');
      logoWrapper.classList.remove('top-2');

      // Show navs
      leftNav.classList.remove('opacity-0', 'pointer-events-none', 'invisible');
      rightNav.classList.remove('opacity-0', 'pointer-events-none', 'invisible');
    }
  });