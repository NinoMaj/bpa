import { useEffect } from 'react';

const OfflineSupport = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('static/workbox/sw.js')
        .then(() => console.log('Service worker registered.'))
        .catch(err => console.dir(err));
    }
  }, []);

  return null;
};

export { OfflineSupport };
