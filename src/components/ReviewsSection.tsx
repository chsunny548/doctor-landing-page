import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const reviews = [
  {
    name: 'Rohit Sharma',
    rating: 5,
    message: 'Dr. Nandini is an amazing psychiatrist. She listened carefully and gave effective advice.'
  },
  {
    name: 'Priya Mehta',
    rating: 4,
    message: 'Very patient and understanding. Helped me a lot with my anxiety issues.'
  },
  {
    name: 'Karan Desai',
    rating: 5,
    message: 'Best doctor I have visited. Highly recommend for anyone struggling emotionally.'
  },
  {
    name: 'Sneha Rao',
    rating: 5,
    message: 'Her approach is comforting and very effective. She helped me understand myself better.'
  }
];

const RatingStars = ({ count }) => (
  <div className="flex justify-center mb-2">
    {[...Array(count)].map((_, i) => (
      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
    ))}
  </div>
);

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Patients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from people who found care, clarity, and healing.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Card className="h-[280px] flex flex-col justify-between shadow-lg p-4">
                <CardHeader className="text-center">
                  <RatingStars count={review.rating} />
                  <CardTitle className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                    {review.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    "{review.message}"
                  </p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSection;