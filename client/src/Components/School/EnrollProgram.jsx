export default function EnrollProgram() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Enroll in School Programs</h2>
      <p className="mb-6">
        Welcome to the enrollment page for our school programs with mid-day meal initiatives.
      </p>

      <h3 className="font-semibold">Steps to Enroll</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Review the eligibility criteria.</li>
        <li>Gather necessary documents.</li>
        <li>Complete the online application form.</li>
        <li>Submit application and await confirmation.</li>
      </ul>

      <h3 className="font-semibold">Requirements</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Proof of residence</li>
        <li>Child’s birth certificate</li>
        <li>Vaccination records</li>
        <li>Income verification documents</li>
      </ul>

      <form className="grid gap-4 max-w-lg">
        <input type="text" placeholder="Child’s Name" className="border p-2 rounded"/>
        <input type="text" placeholder="Parent’s Name" className="border p-2 rounded"/>
        <input type="email" placeholder="Email Address" className="border p-2 rounded"/>
        <input type="text" placeholder="Street Address" className="border p-2 rounded"/>
        <select className="border p-2 rounded">
          <option>Select School</option>
          <option>Green Valley School</option>
          <option>City Public School</option>
        </select>
        <button type="submit" className="bg-green-500 text-white p-2 rounded">Submit Application</button>
      </form>
    </div>
  );
}
