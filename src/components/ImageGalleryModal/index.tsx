import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

interface Props {
  images: string[];
}

const ImageGalleryModal = ({ images }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [nextImageIndex, setNextImageIndex] = useState<number | null>(null);

  const handleImageLoad = () => {
    setIsLoading(false);
    if (nextImageIndex !== null) {
      setCurrentImageIndex(nextImageIndex);
      setNextImageIndex(null);
    }
  };

  const handleNext = () => {
    const nextIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setIsLoading(true);
    setNextImageIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setIsLoading(true);
    setNextImageIndex(prevIndex);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = (): void => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 50;

    if (isSwipe) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-gray-500 text-white">
          Show Preview
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-white overflow-hidden">
        <div
          className="relative w-full h-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Current Image Container */}
          <div className="relative flex items-center justify-center h-[60vh]">
            {/* Loading Spinner */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 z-10">
                <Loader2 className="w-8 h-8 text-white animate-spin" />
              </div>
            )}
            
            {/* Current Image */}
            <img
              src={images[nextImageIndex !== null ? nextImageIndex : currentImageIndex]}
              alt={`Gallery image ${currentImageIndex + 1}`}
              className="object-contain w-full h-full max-h-[80vh] max-w-full"
              onLoad={handleImageLoad}
              style={{ opacity: isLoading ? 0.5 : 1 }}
            />

            {/* Preload Next and Previous Images */}
            <div className="hidden">
              <img
                src={images[(currentImageIndex + 1) % images.length]}
                alt="preload next"
              />
              <img
                src={images[currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1]}
                alt="preload previous"
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors"
              aria-label="Previous image"
              disabled={isLoading}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors"
              aria-label="Next image"
              disabled={isLoading}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
            {currentImageIndex + 1} / {images.length}
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 p-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsLoading(true);
                  setNextImageIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
                disabled={isLoading}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGalleryModal;