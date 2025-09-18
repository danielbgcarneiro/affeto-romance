interface ImagePlaceholderProps {
  label: string;
  ratio?: string;
  className?: string;
}

const ImagePlaceholder = ({ 
  label, 
  ratio = "4/5", 
  className = "" 
}: ImagePlaceholderProps) => {
  return (
    <div 
      className={`
        flex items-center justify-center text-center p-6
        bg-background border-2 border-dashed border-affeto-sage-200
        text-affeto-sage-100 text-sm font-sans font-medium
        rounded-lg transition-colors duration-200
        hover:border-affeto-primary hover:text-affeto-primary
        ${className}
      `}
      style={{ aspectRatio: ratio }}
      aria-label={`Placeholder para ${label}`}
    >
      <div className="max-w-full">
        <div className="font-serif text-xs uppercase tracking-wider mb-2 opacity-60">
          Placeholder
        </div>
        <div className="leading-tight">
          {label}
        </div>
      </div>
    </div>
  );
};

export default ImagePlaceholder;