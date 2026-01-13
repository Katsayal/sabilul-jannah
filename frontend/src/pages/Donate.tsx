const Donate = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Support Our Cause</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Your generous donation empowers us to continue our work and make a lasting impact. Every contribution, no matter the size, brings us closer to our goals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Donation Call to Action */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Make a Donation</h2>
            <p className="text-gray-600 mb-6">
              You can donate securely through our trusted partner, Donorbox. Click the button below to open the donation form.
            </p>
            {/* 
              TODO: Replace this with the actual Donorbox embed code or a direct link.
              This is a placeholder button. For a real implementation, you would
              either embed a Donorbox widget here or link this button to your
              Donorbox campaign page.
            */}
            <a
              href="https://donorbox.org/your-campaign" // <-- Replace with your actual campaign link
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block text-center bg-green-600 text-white px-8 py-4 rounded-md hover:bg-green-700 font-bold text-lg"
            >
              Donate Now
            </a>
          </div>

          {/* Transparency & Impact */}
          <div className="bg-transparent p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Trust Matters</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-green-600 mr-4 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                  <h3 className="font-semibold">Financial Transparency</h3>
                  <p className="text-gray-600">We are committed to being fully transparent about how we use your donations. Our financial reports are published annually.</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-green-600 mr-4 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <div>
                  <h3 className="font-semibold">Direct Impact</h3>
                  <p className="text-gray-600">Your contribution goes directly towards funding our programs and initiatives, making a tangible difference in the community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
