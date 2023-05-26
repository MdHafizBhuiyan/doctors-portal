import React from 'react';
import quote from '../../../assets/icons/quotes.svg';
import people1 from '../../../assets/images/peoples1.png';
import people2 from '../../../assets/images/peoples2.png';
import people3 from '../../../assets/images/peoples3.png';
import Review from './Review';

const Testimonial = () => {

  const reviews = [
    {
      _id: 1,
      name: 'Abdul Hafiz',
      img: people1,
      review: 'The professionalism and friendliness of the whole team is outstanding. I’ve been going with them for a complicated process and then for keeping up and cleaning. Every visit is like visiting friends. I couldn’t be happier with the results.',
      location: 'Bangladesh'
    },
    {
      _id: 2,
      name: 'Chrissy Costenza',
      img: people2,
      review: 'The staff was very friendly and helpful and the dentist was honest and straight forward. I have been to other dentists that exaggerated what my needs were in order to make more money. So it was a relief to find a dentist with integrity.',
      location: 'UK'
    },
    {
      _id: 3,
      name: 'Taylor Swift',
      img: people3,
      review: 'I wish I had switched to them sooner. Great attention and service. You know you are in good hands when you learn things about your bone structure that you had no clue about. Keen eye on detail!',
      location: 'USA'
    },
  ]
  return (
    <section className='my-16'>
      <div className='flex justify-between'>
        <div>
          <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
          <h2 className='text-4xl'>What Our Patients Say</h2>
        </div>
        <figure>
          <img className='w-24 lg:w-48' src={quote} alt=''></img>
        </figure>
      </div>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          reviews.map(review => <Review
            key={review._id}
            review={review}
          ></Review>)
        }
      </div>
    </section>
  );
};

export default Testimonial;