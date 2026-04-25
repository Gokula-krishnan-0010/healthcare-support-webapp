import Form from '@/components/Form';

export default function FormPage() {
  return (
    <div className="bg-gray-50 min-h-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Request Support</h2>
          <p className="mt-2 text-sm text-gray-600">
            Please fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}
