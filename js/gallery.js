// Gallery page functionality

class GalleryPage {
    constructor() {
        this.currentImageIndex = 0;
        this.galleryItems = [];
        this.filteredItems = [];
        this.init();
    }

    init() {
        this.setupGalleryFilter();
        this.setupGalleryModal();
        this.setupGalleryHovers();
        this.collectGalleryItems();
    }

    collectGalleryItems() {
        this.galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
        this.filteredItems = [...this.galleryItems];
    }

    setupGalleryFilter() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filter = btn.dataset.filter;
                
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });

                // Update filtered items for modal navigation
                this.filteredItems = filter === 'all' 
                    ? [...this.galleryItems]
                    : this.galleryItems.filter(item => item.dataset.category === filter);
            });
        });
    }

    setupGalleryModal() {
        const modal = document.getElementById('galleryModal');
        const viewBtns = document.querySelectorAll('.gallery-view-btn');
        const closeBtn = modal.querySelector('.close-modal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        // Gallery data
        const galleryData = [
            
            {
                title: 'Industrial Components',
                description: 'High-precision mechanical parts manufactured for industrial applications.',
                image: 'images/gallery (2).webp'
            },
            {
                title: 'Floral Art Panel',
                description: 'Custom artistic floral design demonstrating our capability in decorative metalwork.',
                image: 'images/gallery (3).webp'
            },
            {
                title: 'Geometric Pattern',
                description: 'Modern geometric design perfect for contemporary architectural applications.',
                image: 'images/gallery (4).webp'
            },
            {
                title: 'Business Signage',
                description: 'Professional cut letters and logos for commercial branding applications.',
                image: "images/gallery (5).webp"
            },
            {
                title: 'Precision Brackets',
                description: 'Custom mounting solutions engineered for specific industrial requirements.',
                image: "images/gallery (6).webp"
            },
            {
                title: 'Mandala Design',
                description: 'Intricate mandala pattern showcasing detailed precision cutting capabilities.',
                image: 'images/gallery (7).webp'
            },
            {
                title: 'Architectural Screen',
                description: 'Elegant privacy screen combining functionality with aesthetic appeal.',
                image: 'images/gallery (8).webp'
            },
            {
                title: 'Company Logo',
                description: '3D cut company branding elements for professional business presentation.',
                image: 'images/gallery (9).webp'
            },
            {
                title: 'Machine Parts',
                description: 'High-precision mechanical components for specialized industrial equipment.',
                image: 'images/gallery (10).webp'
            },
            {
                title: 'Abstract Art Panel',
                description: 'Contemporary abstract design for modern architectural and interior applications.',
                image: 'images/gallery (11).webp'
            },
            {
                title: 'Decorative Border',
                description: 'Ornamental border design for architectural enhancement and decoration.',
                image: 'images/gallery (12).webp'
            },
            {
                title: 'Decorative Peacock Panel',
                description: 'Intricate peacock design showcasing the precision and artistry of our laser cutting capabilities.',
                image: 'images/gallery (13).webp'
            },
            {
                title: 'Industrial Components',
                description: 'High-precision mechanical parts manufactured for industrial applications.',
                image: 'images/gallery (14).webp'
            },
            {
                title: 'Floral Art Panel',
                description: 'Custom artistic floral design demonstrating our capability in decorative metalwork.',
                image: 'images/gallery (15).webp'
            },
            {
                title: 'Geometric Pattern',
                description: 'Modern geometric design perfect for contemporary architectural applications.',
                image: 'images/gallery (16).webp'
            },
            {
                title: 'Business Signage',
                description: 'Professional cut letters and logos for commercial branding applications.',
                image: 'images/gallery (17).webp'
            },
            {
                title: 'Precision Brackets',
                description: 'Custom mounting solutions engineered for specific industrial requirements.',
                image: 'images/gallery (18).webp'
            },
            {
                title: 'Mandala Design',
                description: 'Intricate mandala pattern showcasing detailed precision cutting capabilities.',
                image: 'images/gallery (19).webp'
            },
            {
                title: 'Architectural Screen',
                description: 'Elegant privacy screen combining functionality with aesthetic appeal.',
                image: 'images/gallery (20).webp'
            },
            {
                title: 'Company Logo',
                description: '3D cut company branding elements for professional business presentation.',
                image: 'images/gallery (21).webp'
            },
            {
                title: 'Machine Parts',
                description: 'High-precision mechanical components for specialized industrial equipment.',
                image: 'images/gallery (22).webp'
            },
            {
                title: 'Abstract Art Panel',
                description: 'Contemporary abstract design for modern architectural and interior applications.',
                image: 'images/gallery (23).webp'
            },
            {
                title: 'Decorative Border',
                description: 'Ornamental border design for architectural enhancement and decoration.',
                image: 'images/gallery (24).webp'
            },
            {
                title: 'Decorative Peacock Panel',
                description: 'Intricate peacock design showcasing the precision and artistry of our laser cutting capabilities.',
                image: 'images/gallery (25).webp'
            },
            {
                title: 'Industrial Components',
                description: 'High-precision mechanical parts manufactured for industrial applications.',
                image: 'images/gallery (26).webp'
            },
            {
                title: 'Floral Art Panel',
                description: 'Custom artistic floral design demonstrating our capability in decorative metalwork.',
                image: 'images/gallery (27).webp'
            },
            {
                title: 'Geometric Pattern',
                description: 'Modern geometric design perfect for contemporary architectural applications.',
                image: 'images/gallery (28).webp'
            },
            {
                title: 'Business Signage',
                description: 'Professional cut letters and logos for commercial branding applications.',
                image: 'images/gallery (29).webp'
            },
            {
                title: 'Precision Brackets',
                description: 'Custom mounting solutions engineered for specific industrial requirements.',
                image: 'images/gallery (30).webp'
            },
            {
                title: 'Mandala Design',
                description: 'Intricate mandala pattern showcasing detailed precision cutting capabilities.',
                image: 'images/gallery (31).webp'
            },
            {
                title: 'Architectural Screen',
                description: 'Elegant privacy screen combining functionality with aesthetic appeal.',
                image: 'images/gallery (32).webp'
            },
            {
                title: 'Company Logo',
                description: '3D cut company branding elements for professional business presentation.',
                image: 'images/gallery (33).webp'
            },
            {
                title: 'Abstract Art Panel',
                description: 'Contemporary abstract design for modern architectural and interior applications.',
                image: 'images/images/gallery (35).webp'
            },
            {
                title: 'Decorative Border',
                description: 'Ornamental border design for architectural enhancement and decoration.',
                image: 'images/images/gallery (36).webp'
            }
             {
                title: 'Decorative Peacock Panel',
                description: 'Intricate peacock design showcasing the precision and artistry of our laser cutting capabilities.',
                image: 'images/gallery (37).webp'
            },
            {
                title: 'Industrial Components',
                description: 'High-precision mechanical parts manufactured for industrial applications.',
                image: 'images/gallery (38).webp'
            },
            {
                title: 'Floral Art Panel',
                description: 'Custom artistic floral design demonstrating our capability in decorative metalwork.',
                image: 'images/gallery (39).webp'
            },
            {
                title: 'Geometric Pattern',
                description: 'Modern geometric design perfect for contemporary architectural applications.',
                image: 'images/gallery (40).webp'
            },
            {
                title: 'Business Signage',
                description: 'Professional cut letters and logos for commercial branding applications.',
                image: 'images/gallery (41).webp'
            },
            {
                title: 'Precision Brackets',
                description: 'Custom mounting solutions engineered for specific industrial requirements.',
                image: 'images/gallery (42).webp'
            },
            {
                title: 'Mandala Design',
                description: 'Intricate mandala pattern showcasing detailed precision cutting capabilities.',
                image: 'images/gallery (43).webp'
            },
            {
                title: 'Architectural Screen',
                description: 'Elegant privacy screen combining functionality with aesthetic appeal.',
                image: 'images/gallery (44).webp'
            },
            {
                title: 'Company Logo',
                description: '3D cut company branding elements for professional business presentation.',
                image: 'images/gallery (45).webp'
            },
            {
                title: 'Machine Parts',
                description: 'High-precision mechanical components for specialized industrial equipment.',
                image: 'images/gallery (46).webp'
            },
            {
                title: 'Abstract Art Panel',
                description: 'Contemporary abstract design for modern architectural and interior applications.',
                image: 'images/gallery (47).webp'
            },
        ];

        // Open modal
        viewBtns.forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.currentImageIndex = index;
                this.showModalImage(galleryData[index]);
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        // Close modal
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        // Close modal on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Navigation buttons
        prevBtn.addEventListener('click', () => {
            this.currentImageIndex = (this.currentImageIndex - 1 + galleryData.length) % galleryData.length;
            this.showModalImage(galleryData[this.currentImageIndex]);
        });

        nextBtn.addEventListener('click', () => {
            this.currentImageIndex = (this.currentImageIndex + 1) % galleryData.length;
            this.showModalImage(galleryData[this.currentImageIndex]);
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (modal.style.display === 'block') {
                if (e.key === 'Escape') {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                } else if (e.key === 'ArrowLeft') {
                    prevBtn.click();
                } else if (e.key === 'ArrowRight') {
                    nextBtn.click();
                }
            }
        });

        this.showModalImage = (data) => {
            modalImage.src = data.image;
            modalTitle.textContent = data.title;
            modalDescription.textContent = data.description;
        };
    }

    setupGalleryHovers() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const img = item.querySelector('img');
                img.style.transform = 'scale(1.1)';
            });

            item.addEventListener('mouseleave', () => {
                const img = item.querySelector('img');
                img.style.transform = 'scale(1)';
            });
        });

        // Video placeholders
        const videoPlaceholders = document.querySelectorAll('.video-placeholder');
        videoPlaceholders.forEach(placeholder => {
            placeholder.addEventListener('click', () => {
                alert('Video player would open here. Integration with video platform needed.');
            });
        });
    }
}

// Initialize gallery page functionality
document.addEventListener('DOMContentLoaded', () => {
    new GalleryPage();
});