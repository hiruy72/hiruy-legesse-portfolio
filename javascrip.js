
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Dark mode toggle
        const themeToggle = document.getElementById('theme-toggle');
        const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const mobileThemeToggleCircle = document.getElementById('mobile-theme-toggle-circle');
        
        // Check for saved user preference or use system preference
        if (localStorage.getItem('color-theme') === 'dark' || (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            mobileThemeToggleCircle.classList.replace('translate-x-1', 'translate-x-6');
        } else {
            document.documentElement.classList.remove('dark');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            mobileThemeToggleCircle.classList.replace('translate-x-6', 'translate-x-1');
        }
        
        // Toggle desktop theme
        themeToggle.addEventListener('click', () => {
            // Toggle icon
            themeIcon.classList.toggle('fa-moon');
            themeIcon.classList.toggle('fa-sun');
            
            // Toggle theme
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        });
        
        // Toggle mobile theme
        mobileThemeToggle.addEventListener('click', () => {
            // Toggle circle position
            mobileThemeToggleCircle.classList.toggle('translate-x-1');
            mobileThemeToggleCircle.classList.toggle('translate-x-6');
            
            // Toggle theme
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            }
        });
        
    // Form submission handler
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Change button to loading state
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
    submitBtn.disabled = true;
    statusEl.classList.add('hidden');

    try {
        const formData = new FormData(form);
        
        // Add a timestamp to prevent caching issues
        formData.append('_timestamp', Date.now());
        
        // Create abort controller for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
        
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            },
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        // First check if the response is OK (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Then try to parse the JSON
        const data = await response.json();
        
        if (data.success) {
            statusEl.innerHTML = `
                <div class="flex items-center justify-center">
                    <svg class="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Message sent successfully! I'll get back to you soon.
                </div>
            `;
            statusEl.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'dark:bg-red-900', 'dark:text-red-200');
            statusEl.classList.add('bg-green-100', 'text-green-700', 'dark:bg-green-900', 'dark:text-green-200');
            form.reset();
            
            // Track successful submission
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submission', {
                    'event_category': 'contact',
                    'event_label': 'success'
                });
            }
        } else {
            throw new Error(data.message || 'The server responded but indicated a failure.');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        
        let errorMessage = 'An error occurred while sending your message.';
        
        if (error.name === 'AbortError') {
            errorMessage = 'Request timed out. Your message may have been sent - please check your connection.';
        } else if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
            errorMessage = 'Network error. Your message may have been sent, but we couldn\'t verify it.';
        }
        
        statusEl.innerHTML = `
            <div class="flex items-center justify-center">
                <svg class="w-6 h-6 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                ${errorMessage} You can also email me directly at <a href="mailto:hiruyadane@gmail.com" class="text-primary underline">hiruyadane@gmail.com</a>.
            </div>
        `;
        
        statusEl.classList.remove('hidden', 'bg-green-100', 'text-green-700', 'dark:bg-green-900', 'dark:text-green-200');
        statusEl.classList.add('bg-red-100', 'text-red-700', 'dark:bg-red-900', 'dark:text-red-200');
        
        // Track failed submission
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submission', {
                'event_category': 'contact',
                'event_label': 'failed',
                'value': error.message
            });
        }
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Scroll to status message
        statusEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});
   
  
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });

        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();
    