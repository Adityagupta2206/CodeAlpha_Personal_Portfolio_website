document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s';
    });

    card.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});



document.querySelectorAll('.project-card img').forEach(image => {
    image.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <img src="${this.src}" alt="Project Image">
            </div>
        `;
        
        const closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', function() {
            modal.remove();
        });

        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.remove();
            }
        });

        document.body.appendChild(modal);
    });
});
