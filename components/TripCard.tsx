import { Link, useLocation } from 'react-router';
import { ChipDirective, ChipListComponent } from "@syncfusion/ej2-react-buttons";
import { cn, getFirstWord } from '~/lib/utilis';

interface TripCardProps {
  id: string | number;
  name: string;
  location: string;
  imageUrl: string;
  tags?: string[];
  price: string;
}

const TripCard: React.FC<TripCardProps> = ({ id, name, location, imageUrl, tags = [], price }) => {
  const path = useLocation();

  // Determine dynamic link
  const linkTo = path.pathname === '/' || path.pathname.startsWith('/travel')
    ? `/travel/${id}`
    : `/trips/${id}`;

  return (
    <Link to={linkTo} className='trip-card block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition'>
      {/* Image */}
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />

      {/* Trip Info */}
      <article className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <figure className="flex items-center gap-2 mt-1">
          <img src="/assets/icons/location-mark.svg" alt="location" className='w-4 h-4' />
          <figcaption className="text-sm text-gray-500">{location}</figcaption>
        </figure>
      </article>

      {/* Tags */}
      {tags.length > 0 && (
        <div className='px-4 pb-4'>
          <ChipListComponent id='travel-chip' cssClass="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <ChipDirective
                key={index}
                text={getFirstWord(tag)}
                cssClass={cn(
                  index === 1
                    ? '!bg-pink-50 !text-pink-500'
                    : '!bg-success-50 !text-success-700'
                )}
              />
            ))}
          </ChipListComponent>
        </div>
      )}

      {/* Price Pill */}
      <article className='tripCard-pill absolute top-4 right-4 bg-primary-100 text-primary-800 px-3 py-1 rounded-full font-medium'>
        {price}
      </article>
    </Link>
  );
};

export default TripCard;
