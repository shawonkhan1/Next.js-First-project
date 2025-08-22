import Link from "next/link";

const Banner = () => {
  return (
    <section className="w-11/12 mx-auto mt-8 relative rounded-lg overflow-hidden h-[500px] sm:h-[600px] lg:h-[700px] px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Banner.jpg"
          alt="Banner Background"
          className="object-cover w-full h-full opacity-80"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-12 text-center text-white">
        <Link
          href="/allproduct"
          className="inline-block bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-lg font-medium text-base transition"
        >
          View Our Product
        </Link>
      </div>
    </section>
  );
};

export default Banner;
