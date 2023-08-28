import { useEffect, useRef } from 'react';

function BlogContent({ body } : { body: string | null }) {
  const componentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const componentNode = componentRef.current;
    
    if (componentNode) {
      const elements = componentNode.querySelectorAll('*');
      const tags = componentNode.querySelectorAll('a');
      
      // Loop through each element and add a unique ID
      elements.forEach((element, i) => {
        // Check if the element already has an ID
        if (!element.id || !element.innerText) {
          // Cast 'element' to 'HTMLElement' to access 'innerText'
          const htmlElement = element as HTMLElement;
          
          // Generate a unique ID using the current timestamp and a random number
          const uniqueId = htmlElement.innerText
            .trim()
            .replace('&#39;', '')
            .replace('&amp;', '')
            .replace('&nbsp;', '')
            .replace('&nbsp;', '')
            .replace(':', '')
            .replaceAll(' ', '-');
            
          // Set the ID of the element
          if (tags[i]) {
            tags[i].setAttribute('target', '_blank');
            tags[i].setAttribute('style', 'color:#0d6efd');
          }
          htmlElement.setAttribute('id', uniqueId);
        }
      });
    }
  }, []);

  return (
    <div
      ref={componentRef}
      className="blog-body mt-[40px]"
      dangerouslySetInnerHTML={{ __html: body || '' }}
    />
  );
}

export default BlogContent;
