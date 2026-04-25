import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-900 transition-colors">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Healthcare Support for Our Community
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400">
              CareSupport NGO provides essential medical assistance, volunteer coordination, and healthcare resources to those in need. We use technology to bridge the gap between patients and providers.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/form"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
              >
                Request Support
              </Link>
              <Link href="/form" className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-slate-800/50 py-24 sm:py-32 transition-colors border-t border-gray-100 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to get back on your feet
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-slate-100">
                  Medical Expense Support
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-slate-400">
                  <p className="flex-auto">Financial assistance for critical surgeries, medicines, and hospital stays.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-slate-100">
                  Volunteer Network
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-slate-400">
                  <p className="flex-auto">Connecting patients with local volunteers for transportation and home care.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-slate-100">
                  Health Consultations
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-slate-400">
                  <p className="flex-auto">Access to tele-consultations and health awareness workshops.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
