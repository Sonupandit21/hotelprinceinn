// import React, { Component } from 'react';

// const testimonials = [
//   {
//     name: "Oscar Newman",
//     country: "From Noida",
//     image: "https://i.pravatar.cc/100?img=12",
//     message:
//       "An amazing stay, The rooms were comfortable, clean, and well-equipped. The staff was friendly and accommodating. Highly recommend for a relaxing getaway",
//     rating: 5,
//   },
//   {
//     name: "Emma Trueman",
//     country: "From Greater Noida",
//     image: "https://i.pravatar.cc/100?img=47",
//     message:
//       "Prince Inn exceeded my expectations! The location is perfect, rooms are spacious, and the service is top-notch. I felt well taken care of throughout my stay. Will definitely return!",
//     rating: 5,
//   },
//   {
//     name: "Viktoria Freeman",
//     country: "From Noida",
//     image: "https://i.pravatar.cc/100?img=33",
//     message:
//       "Had a fantastic experience at Prince Inn, The ambiance is lovely, and the staff made sure all our needs were met. The restaurant’s food was delicious. Highly recommend!",
//     rating: 5,
//   },
// ];

// class Feedback extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentIndex: 1,
//     };
//     this.interval = null;
//   }

//   componentDidMount() {
//     this.interval = setInterval(this.goToNext, 7000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   goToPrev = () => {
//     this.setState((prevState) => ({
//       currentIndex:
//         (prevState.currentIndex - 1 + testimonials.length) % testimonials.length,
//     }));
//   };

//   goToNext = () => {
//     this.setState((prevState) => ({
//       currentIndex: (prevState.currentIndex + 1) % testimonials.length,
//     }));
//   };

//   getVisibleIndices() {
//     const { currentIndex } = this.state;
//     const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
//     const next = (currentIndex + 1) % testimonials.length;
//     return [prev, currentIndex, next];
//   }

//   render() {
//     const visible = this.getVisibleIndices();

//     return (
//       <section className="bg-[#ffffff] py-16 px-4 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//           Feedback from our Guests
//         </h2>
//         <p className="max-w-2xl mx-auto text-gray-500 mb-12">
//         Our guests consistently praise the exceptional service, comfortable accommodations, and welcoming atmosphere. Many highlight the attentive staff, clean facilities, and the overall memorable experience, making their stay truly enjoyable
//         </p>

//         <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto">
//           {visible.map((index, position) => {
//             const testimonial = testimonials[index];
//             const isCenter = position === 1;

//             return (
//               <div
//                 key={index}
//                 className={`w-full md:w-1/3 transition-transform duration-300 
//                             ${isCenter ? 'scale-105' : 'opacity-60'} 
//                             ${isCenter ? '' : 'hidden md:block'}`}
//               >
//                 <div className="flex flex-col items-center">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-20 h-20 rounded-full border-4 border-white shadow-lg mb-3"
//                   />
//                   <h3 className="text-lg font-semibold">{testimonial.name}</h3>
//                   <p className="text-sm text-gray-500 mb-4">{testimonial.country}</p>

//                   <div className="bg-white p-6 rounded-xl shadow-md relative">
//                     {isCenter && (
//                       <span className="absolute top-0 left-0 text-yellow-400 font-bold text-3xl ml-2 -mt-4">
//                         ““
//                       </span>
//                     )}
//                     <div className="flex justify-center text-yellow-500 mb-2">
//                       {Array.from({ length: testimonial.rating }).map((_, i) => (
//                         <span key={i}>★</span>
//                       ))}
//                     </div>
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       {testimonial.message}
//                     </p>
//                     {isCenter && (
//                       <span className="absolute bottom-0 right-0 text-yellow-400 font-bold text-3xl mr-2 -mb-4">
//                         ””
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="flex justify-center gap-6 mt-10">
//           <button
//             onClick={this.goToPrev}
//             className="w-10 h-10 bg-blue-600 text-white rounded-full text-xl shadow-md"
//           >
//             ←
//           </button>
//           <button
//             onClick={this.goToNext}
//             className="w-10 h-10 bg-blue-600 text-white rounded-full text-xl shadow-md"
//           >
//             →
//           </button>
//         </div>
//       </section>
//     );
//   }
// }

// export default Feedback;


import React, { Component } from 'react';
import axios from 'axios';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: [],
      currentIndex: 1,
    };
    this.interval = null;
  }

  componentDidMount() {
    this.fetchTestimonials();
    this.interval = setInterval(this.goToNext, 7000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchTestimonials = async () => {
    try {
      const response = await axios.get('/api/feedback');
      this.setState({ testimonials: response.data });
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
    }
  };

  goToPrev = () => {
    const { testimonials, currentIndex } = this.state;
    if (testimonials.length === 0) return;
    this.setState({
      currentIndex: (currentIndex - 1 + testimonials.length) % testimonials.length,
    });
  };

  goToNext = () => {
    const { testimonials, currentIndex } = this.state;
    if (testimonials.length === 0) return;
    this.setState({
      currentIndex: (currentIndex + 1) % testimonials.length,
    });
  };

  getVisibleIndices() {
    const { testimonials, currentIndex } = this.state;
    if (testimonials.length === 0) return [];
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const next = (currentIndex + 1) % testimonials.length;
    return [prev, currentIndex, next];
  }

  render() {
    const { testimonials } = this.state;
    const visible = this.getVisibleIndices();

    return (
      <section className="bg-[#ffffff] py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Feedback from our Guests
        </h2>
        <p className="max-w-2xl mx-auto text-gray-500 mb-12">
          Our guests consistently praise the exceptional service, comfortable accommodations, and welcoming atmosphere.
        </p>

        {testimonials.length > 0 ? (
          <>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto">
              {visible.map((index, position) => {
                const testimonial = testimonials[index];
                const isCenter = position === 1;

                return (
                  <div
                    key={index}
                    className={`w-full md:w-1/3 transition-transform duration-300 
                                ${isCenter ? 'scale-105' : 'opacity-60'} 
                                ${isCenter ? '' : 'hidden md:block'}`}
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full border-4 border-white shadow-lg mb-3"
                      />
                      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500 mb-4">{testimonial.country}</p>

                      <div className="bg-white p-6 rounded-xl shadow-md relative">
                        {isCenter && (
                          <span className="absolute top-0 left-0 text-yellow-400 font-bold text-3xl ml-2 -mt-4">
                            ““
                          </span>
                        )}
                        <div className="flex justify-center text-yellow-500 mb-2">
                          {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {testimonial.message}
                        </p>
                        {isCenter && (
                          <span className="absolute bottom-0 right-0 text-yellow-400 font-bold text-3xl mr-2 -mb-4">
                            ””
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center gap-6 mt-10">
              <button
                onClick={this.goToPrev}
                className="w-10 h-10 bg-blue-600 text-white rounded-full text-xl shadow-md"
              >
                ←
              </button>
              <button
                onClick={this.goToNext}
                className="w-10 h-10 bg-blue-600 text-white rounded-full text-xl shadow-md"
              >
                →
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500 mt-8">Loading feedback...</p>
        )}
      </section>
    );
  }
}

export default Feedback;
