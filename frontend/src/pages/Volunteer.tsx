import VolunteerForm from "../components/forms/VolunteerForm";

const Volunteer = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Join Our Team</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Become a part of our mission. Your time and skills can make a real difference in the lives of many. We are looking for passionate individuals to help us with our cause.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Volunteer With Us?</h2>
            <p className="text-gray-600 mb-4">
              Volunteering is a rewarding experience. It's an opportunity to give back, learn new skills, meet like-minded people, and be part of a positive change.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">What you can do:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Help organize and run community events.</li>
              <li>Assist with administrative tasks and outreach.</li>
              <li>Participate in fundraising campaigns.</li>
              <li>Share your professional skills (e.g., marketing, IT, accounting).</li>
              <li>Provide support directly to our beneficiaries.</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Volunteer Application Form</h2>
            <VolunteerForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
