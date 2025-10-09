import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const elements = [...block.children];

  // Order of elements:
  const roleMap = {
    0: 'desktop-image',
    1: 'mobile-image',
    2: 'rich-text-content',
    3: 'legal-copy-text',
  };

  elements.forEach((child, index) => {
    // Assign role based on order
    const role = roleMap[index];
    if (role) child.classList.add(role);

    // Process images for optimization
    const img = child.querySelector('picture > img');
    if (!img) return;
    const optimizedPicture = createOptimizedPicture(img.src, img.alt, false, [{ width: '1440' }]);
    img.closest('picture').replaceWith(optimizedPicture);
  });
}
