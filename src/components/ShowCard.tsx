
// import Image from "next/image";
// import { Show } from "../app/dashboard/data/types";

// interface ShowCardProps {
//   show: Show;
// }

// export default function ShowCard({ show }: ShowCardProps) {
//   return (
//     <div className="relative flex-shrink-0 w-36 md:w-40 lg:w-44 cursor-pointer transform transition-transform duration-300 hover:scale-125 hover:z-30 py-12">
//       <div className="relative w-full h-48 md:h-52 lg:h-56 rounded-lg overflow-hidden shadow-lg">
//         <Image
//           src={show.thumbnail}
//           alt={show.title}
//           fill
//           className="object-cover rounded-lg "
//         />
//       </div>

//       {/* Overlay title on hover */}
//       <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 opacity-0 hover:opacity-100 transition duration-300 ">
//         <h3 className="text-white font-semibold text-xs md:text-sm">{show.title}</h3>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import { Show } from "../app/dashboard/data/types";

interface ShowCardProps {
  show: Show;
}

export default function ShowCard({ show }: ShowCardProps) {
  return (
    <div className="relative flex-shrink-0 w-36 md:w-40 lg:w-44 cursor-pointer transform transition-transform duration-300 hover:scale-125 hover:z-30  lg:py-12">
      
      {/* Image */}
      <div className="relative w-full h-48 md:h-52 lg:h-56 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={show.thumbnail}
          alt={show.title}
          fill
          className="object-cover rounded-lg"
        />

        {/* Full card hover overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white font-semibold text-xs md:text-sm text-center px-2">
            {show.title} <br />
            {show.thumbnail} <br />
            {show.rating}
          </h3>
        </div>
      </div>
    </div>
  );
}





