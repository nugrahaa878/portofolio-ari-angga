import React, { useState } from 'react';
import {
	Dialog,
	DialogContent,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageGalleryModal = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [touchStart, setTouchStart] = useState<number>(0);
	const [touchEnd, setTouchEnd] = useState<number>(0);

	// Sample images array - replace with your actual images
	const images = [
		"https://i.ibb.co.com/DwHJHxN/oy.png",
		"https://i.ibb.co.com/2yMcrGQ/ristek.jpg",
		"https://i.ibb.co.com/yFpvWdP/sayurbox.jpg",
		"https://i.ibb.co.com/N7gZNht/pinhome.png"
	];

	const handleNext = () => {
		setCurrentImageIndex((prev) =>
			prev === images.length - 1 ? 0 : prev + 1
		);
	};

	const handlePrevious = () => {
		setCurrentImageIndex((prev) =>
			prev === 0 ? images.length - 1 : prev - 1
		);
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
				<Button variant="outline" className='bg-gray-500 text-white'>Show Preview</Button>
			</DialogTrigger>
			<DialogContent className="max-w-4xl p-0 bg-white">
				<div
					className="relative w-full h-full"
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					{/* Current Image */}
					<div className="relative flex items-center justify-center min-h-[60vh]">
						<img
							src={images[currentImageIndex]}
							alt={`Gallery image ${currentImageIndex + 1}`}
							className="object-contain w-full h-full"
						/>

						{/* Navigation Buttons */}
						<button
							onClick={handlePrevious}
							className="absolute left-4 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors"
							aria-label="Previous image"
						>
							<ChevronLeft className="w-6 h-6" />
						</button>
						<button
							onClick={handleNext}
							className="absolute right-4 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors"
							aria-label="Next image"
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
								onClick={() => setCurrentImageIndex(index)}
								className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
									}`}
								aria-label={`Go to image ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ImageGalleryModal;