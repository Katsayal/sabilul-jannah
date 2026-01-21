export default function PostLoading() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Sticky Header Nav Skeleton */}
      <div className="bg-gray-50 border-b border-gray-100 py-6 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="h-4 w-32 bg-gray-200 rounded-full animate-pulse" />
        </div>
      </div>

      <div className="container mx-auto px-6 pt-16 max-w-4xl">
        {/* Title Area */}
        <div className="mb-12 space-y-4">
          <div className="h-4 w-24 bg-secondary/20 rounded-full animate-pulse mx-auto md:mx-0" />
          <div className="h-12 w-full bg-gray-100 rounded-2xl animate-pulse" />
          <div className="h-12 w-3/4 bg-gray-100 rounded-2xl animate-pulse" />
        </div>

        {/* Hero Image Skeleton */}
        <div className="w-full h-75 md:h-125 rounded-[2.5rem] bg-gray-200 animate-pulse mb-16" />

        {/* Content Paragraphs */}
        <div className="space-y-6">
          <div className="h-4 w-full bg-gray-50 rounded-full animate-pulse" />
          <div className="h-4 w-full bg-gray-50 rounded-full animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-50 rounded-full animate-pulse" />
          <div className="h-4 w-full bg-gray-50 rounded-full animate-pulse" />
          <div className="h-4 w-2/3 bg-gray-50 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}