export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  source: string;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Victoria',
    rating: 5,
    date: 'August 2026',
    service: 'Eyebrow Shaping & SPMU Consultation',
    comment: 'Pain free, thorough & very friendly. Would highly recommend Drita to anyone looking for perfection!',
    source: 'Verified Treatwell Booking',
  },
  {
    id: 'rev-2',
    author: 'Rufy',
    rating: 5,
    date: 'August 2026',
    service: 'Facial Waxing & Eyebrow Styling',
    comment: 'Very thorough waxing. I also love how the aesthetician is very mindful of waxing my face — she’s so caring and professional.',
    source: 'Verified Treatwell Booking',
  },
  {
    id: 'rev-3',
    author: 'Mandy',
    rating: 5,
    date: 'July 2026',
    service: 'SPMU Brows & Tinting',
    comment: 'Very knowledgeable and excellent brows as a result. Friendly, informative, and explained every single step.',
    source: 'Verified Treatwell Booking',
  },
  {
    id: 'rev-4',
    author: 'Christina',
    rating: 5,
    date: 'July 2026',
    service: 'Anti-Wrinkle & Skin Rejuvenation',
    comment: 'Always great service with Drita, making me feel comfortable. Very friendly and professional atmosphere in Salisbury.',
    source: 'Verified Treatwell Booking',
  },
  {
    id: 'rev-5',
    author: 'Janet',
    rating: 5,
    date: 'June 2026',
    service: 'Eyebrow Threading & Tinting',
    comment: 'Drita is lovely and I always leave her salon with beautiful, perfectly shaped eyebrows! Wouldn\'t go anywhere else.',
    source: 'Verified Treatwell Booking',
  },
];
