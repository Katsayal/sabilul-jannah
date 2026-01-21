export default function BlogLoading() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header Skeleton */}
      <section className="bg-primary-dark py-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="h-4 w-32 bg-white/10 mx-auto rounded-full mb-6 animate-pulse" />
          <div className="h-12 md:h-16 w-3/4 bg-white/10 mx-auto rounded-2xl mb-6 animate-pulse" />
          <div className="h-4 w-1/2 bg-white/10 mx-auto rounded-full animate-pulse" />
        </div>
      </section>

      {/* Grid Skeleton */}
      <div className="container mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100">
              {/* Image Placeholder */}
              <div className="h-64 bg-gray-200 animate-pulse" />
              
              <div className="p-8 space-y-4">
                {/* Date Placeholder */}
                <div className="h-3 w-24 bg-secondary/20 rounded-full animate-pulse" />
                {/* Title Placeholder */}
                <div className="space-y-2">
                  <div className="h-6 w-full bg-gray-100 rounded-lg animate-pulse" />
                  <div className="h-6 w-2/3 bg-gray-100 rounded-lg animate-pulse" />
                </div>
                {/* Button Placeholder */}
                <div className="pt-4">
                  <div className="h-10 w-32 bg-gray-50 rounded-xl animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}