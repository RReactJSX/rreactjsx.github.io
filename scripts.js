document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});





const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", async () => {
    const projectGrid = document.getElementById('project-grid');
    const showMoreBtn = document.getElementById('show-more-btn');
    const githubUser = 'xorrdev'; // Replace with your GitHub username

    let allRepos = [];
    let displayedRepos = 0;
    const reposPerPage = 4;
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
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            const projectTitle = document.createElement('h3');
            projectTitle.textContent = repo.name;

            const projectDescription = document.createElement('p');
            projectDescription.textContent = repo.description || 'No description available';

            const viewButton = document.createElement('a');
            viewButton.href = repo.html_url;
            viewButton.target = '_blank';
            viewButton.textContent = 'View Project';
            viewButton.classList.add('cta-btn'); // Add class "cta-button"
            
            projectCard.appendChild(projectTitle);
            projectCard.appendChild(projectDescription);
            projectCard.appendChild(viewButton);

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

