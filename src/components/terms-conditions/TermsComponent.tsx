import { lazy, Suspense } from 'react';

const TermsContent = lazy(() => import('./TermsContent'));

export default function TermsComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <TermsContent />
    </Suspense>
  )
}
