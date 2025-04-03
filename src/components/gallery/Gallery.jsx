import { useRef } from "react";
import { Button } from "../index.js";

export default function PhotoGallery() {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += offset;
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative w-full max-w-4xl overflow-hidden">
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-scroll scroll-smooth scrollbar-hide"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <img
              key={i}
              src={`https://picsum.photos/300/200?random=${i}`}
              alt={`Random ${i}`}
              className="w-60 h-40 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
      <div className="mt-4 flex gap-4">
        <Button onClick={() => scroll(-300)}>←</Button>
        <Button onClick={() => scroll(300)}>→</Button>
      </div>
    </div>
  );
}