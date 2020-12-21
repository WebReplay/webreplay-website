export default function CallToAction() {
  return (
    <>
      <div class="bg-blue-700">
        <div class="max-w-5xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            <span class="block">Ready to say goodbye to bad bug reports?</span>
          </h2>

          <a
            className="typeform-share mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 sm:w-auto"
            href="https://form.typeform.com/to/jAaabLbi"
            data-mode="drawer_right"
            data-submit-close-delay="0"
            target="_blank"
          >
            Join the waitlist
          </a>
        </div>
      </div>
      <div className="bg-blue-700" style={{ borderTop: "1px solid #3b82f6" }}>
        <div class="max-w-5xl mx-auto text-center px-4 py-2 sm:px-6 lg:px-8">
          <a className="text-blue-200" href="/privacy.html">
            Privacy
          </a>
          {/* <a href="twitter.com">
          <svg width="20" height="20" fill="currentColor">
            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
          </svg>
        </a> */}
        </div>
      </div>
    </>
  );
}
