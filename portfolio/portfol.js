function toggleTheme() 
        {
            document.body.classList.toggle("light-theme");
        }

        function enlargeCertificate(img) 
        {
            if (img.classList.contains('enlarged')) {
                img.classList.remove('enlarged'); // Shrinks back to normal
            } else {
                document.querySelectorAll('.certificate img').forEach(el => el.classList.remove('enlarged')); // Remove enlargement from others
                img.classList.add('enlarged'); // Enlarges the clicked one
            }
        }