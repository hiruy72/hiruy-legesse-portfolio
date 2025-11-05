
    
        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Theme toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const mobileThemeToggleCircle = document.getElementById('mobile-theme-toggle-circle');

        function toggleTheme() {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }

        themeToggle.addEventListener('click', toggleTheme);
        mobileThemeToggle.addEventListener('click', toggleTheme);

        // Set initial theme
        if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            themeIcon.className = 'fas fa-sun';
        } else {
            document.documentElement.classList.remove('dark');
            themeIcon.className = 'fas fa-moon';
        }

        // Mobile menu functionality
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Animate skill bars on scroll
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
        }

        // Intersection Observer for skill bars animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                }
            });
        }, { threshold: 0.5 });

        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            observer.observe(skillsSection);
        }

        // Create floating particles
        function createParticles() {
            const container = document.getElementById('particles-container');
            const particleCount = 20;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random size
                const size = Math.random() * 10 + 5;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random position
                particle.style.left = `${Math.random() * 100}vw`;
                particle.style.top = `${Math.random() * 100}vh`;
                
                // Random animation delay and duration
                const delay = Math.random() * 5;
                const duration = Math.random() * 10 + 10;
                particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
                
                container.appendChild(particle);
            }
        }

        // Initialize particles
        createParticles();

        // Form submission with Web3Forms
        const contactForm = document.getElementById('contact-form');
        const formStatus = document.getElementById('form-status');
        const submitBtn = document.getElementById('submit-btn');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Change button text and disable
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
            submitBtn.disabled = true;
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Send form data using fetch
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(async response => {
                const json = await response.json();
                
                if (response.status === 200) {
                    // Success
                    formStatus.className = 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 mb-6 p-4 rounded-lg text-center';
                    formStatus.innerHTML = 'Thank you! Your message has been sent successfully.';
                    formStatus.classList.remove('hidden');
                    contactForm.reset();
                } else {
                    // Error
                    throw new Error(json.message);
                }
            })
            .catch(error => {
                // Error
                formStatus.className = 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 mb-6 p-4 rounded-lg text-center';
                formStatus.innerHTML = 'Oops! There was a problem sending your message. Please try again.';
                formStatus.classList.remove('hidden');
                console.error('Error:', error);
            })
            .finally(() => {
                // Reset button
                submitBtn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i> Send Message';
                submitBtn.disabled = false;
                
                // Hide status message after 5 seconds
                setTimeout(() => {
                    formStatus.classList.add('hidden');
                }, 5000);
            });
        });

        // Add scroll-based animations
        function handleScrollAnimations() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        }

        // Add scroll event listener
        window.addEventListener('scroll', handleScrollAnimations);
        
        // Initial check on page load
        handleScrollAnimations();
    