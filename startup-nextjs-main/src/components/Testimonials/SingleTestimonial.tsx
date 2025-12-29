import { Testimonial } from "@/types/testimonial";

interface Props {
  testimonial: Testimonial;
}

const SingleTestimonial = ({ testimonial }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-transform hover:translate-y-1 duration-300">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full mb-4 object-cover"
      />
      <p className="text-gray-700 dark:text-gray-200 mb-4">{testimonial.content}</p>
      <div className="flex items-center mb-2">
        {Array(testimonial.star).fill(0).map((_, idx) => (
          <svg
            key={idx}
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.145c.969 0 1.371 1.24.588 1.81l-3.36 2.442a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.36-2.442a1 1 0 00-1.176 0l-3.36 2.442c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.044 9.384c-.784-.57-.38-1.81.588-1.81h4.145a1 1 0 00.95-.69l1.286-3.957z"/>
          </svg>
        ))}
      </div>
      <h4 className="font-semibold text-black dark:text-white">{testimonial.name}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.designation}</p>
    </div>
  );
};

export default SingleTestimonial;
