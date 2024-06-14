import React, { useState, useEffect, useRef } from "react";

interface DescriptionComponentProps {
  description: string;
}

const DescriptionComponent: React.FC<DescriptionComponentProps> = ({
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const originalHeight = textElement.scrollHeight;
      textElement.classList.add("clamped-text");
      const clampedHeight = textElement.scrollHeight;
      textElement.classList.remove("clamped-text");
      if (originalHeight > clampedHeight) {
        setIsClamped(true);
      }
    }
  }, [description]);

  return (
    <div className="space-y-3 mt-4 pl-0 text-sm text-gray-800">
      <p ref={textRef} className={isExpanded ? "" : "clamped-text"}>
        {description}
      </p>
      {isClamped && (
        <button
          onClick={toggleReadMore}
          className="text-blue-500 hover:underline"
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default DescriptionComponent;
