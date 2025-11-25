export default function Loading() {
  return (
    <div className="min-h-screen bg-bg-secondary">
      {/* Header Skeleton */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-6 w-64 bg-white/20 rounded mb-6 animate-pulse" />
          <div className="h-12 w-96 bg-white/20 rounded mb-4 animate-pulse" />
          <div className="h-6 w-full max-w-3xl bg-white/20 rounded animate-pulse" />
        </div>
      </section>

      {/* Products Grid Skeleton */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-card-bg rounded-xl border border-border p-6">
                <div className="w-full h-64 bg-gray-700 rounded-lg mb-4 animate-pulse" />
                <div className="h-4 w-24 bg-gray-700 rounded mb-2 animate-pulse" />
                <div className="h-6 w-48 bg-gray-700 rounded mb-2 animate-pulse" />
                <div className="h-4 w-full bg-gray-700 rounded mb-4 animate-pulse" />
                <div className="space-y-2 mb-4">
                  <div className="h-3 w-full bg-gray-700 rounded animate-pulse" />
                  <div className="h-3 w-full bg-gray-700 rounded animate-pulse" />
                  <div className="h-3 w-3/4 bg-gray-700 rounded animate-pulse" />
                </div>
                <div className="h-10 w-full bg-gray-700 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
