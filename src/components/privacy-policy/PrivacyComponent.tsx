import { lazy, Suspense } from 'react';

const PrivacyContent = lazy(() => import('./PrivacyContent'));

export default function PrivacyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <PrivacyContent />
    </Suspense>
  )
}
