import { useState, useEffect } from 'react';

const reviews = [
  {
    id: 1,
    name: "Ahmad Memet",
    rating: 5,
    image: "/memet.jpg",
    review: "Emang keren banget ni toko, sepatu nya ori semua di tambah admin ramah 🙂",
  },
  {
    id: 2,
    name: "Nesaaaa",
    rating: 5,
    image: "/nesa.jpg",
    review: "Sepatunya bagus bagus, admin revan nya ganteng banget !!!",
  },
  {
    id: 3,
    name: "Pais Bentang",
    rating: 5,
    image: "/pais.jpg",
    review: "Gila ga nyangka banget nemu toko se keren ini, sukses terus 😎",
  }
];

const ReviewSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-base-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize text-primary">
            What Customers Say
          </h2>
          <p className="mt-2 text-base-content/70">
            Read trusted reviews from our customers
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="max-w-3xl mx-auto">
                  <div className="text-center">
                    <img
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                      src={review.image}
                      alt={review.name}
                    />
                    <div className="flex justify-center mb-4">
                      {[...Array(review.rating)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-5 h-5 text-yellow-400" // Changed from text-warning to text-yellow-400
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg font-semibold text-base-content/80 italic mb-4">"{review.review}"</p>
                    <p className="text-2xl font-bold text-base-content">{review.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-primary' : 'bg-base-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;