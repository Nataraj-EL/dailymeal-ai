import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center font-sans">
      <h1 className="text-4xl font-extrabold text-kitchen-charcoal tracking-tight">404</h1>
      <h2 className="text-xl font-bold text-kitchen-clay mt-2">Page Not Found</h2>
      <p className="mt-4 text-muted-foreground max-w-sm text-sm">
        The page you are looking for does not exist in our kitchen list.
      </p>
      <Link
        href="/"
        className="mt-6 px-5 py-2.5 rounded-md bg-kitchen-clay hover:bg-kitchen-clay/90 text-white text-sm font-semibold transition-colors cursor-pointer"
      >
        Back to Home
      </Link>
    </div>
  );
}
