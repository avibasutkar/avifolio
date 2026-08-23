import React, { useState, useEffect, useRef, Suspense } from 'react';

// A simple cache to store image loading promises and results
const imageCache = new Map<string, Promise<boolean> | boolean>();

function suspendImage(src: string) {
  const cached = imageCache.get(src);
  if (cached === true) return true;
  if (cached === false) return false; // Error loading
  if (cached instanceof Promise) throw cached;

  const promise = new Promise<boolean>((resolve) => {
    const img = new Image();
    img.onload = () => {
      imageCache.set(src, true);
      resolve(true);
    };
    img.onerror = () => {
      imageCache.set(src, false);
      resolve(false);
    };
    img.src = src;
  });

  imageCache.set(src, promise);
  throw promise;
}

function ImgResource({ 
  src, 
  alt, 
  className, 
  errorFallback 
}: { 
  src: string; 
  alt: string; 
  className?: string; 
  errorFallback?: React.ReactNode;
}) {
  const isSuccess = suspendImage(src);
  
  if (!isSuccess && errorFallback) {
    return <>{errorFallback}</>;
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
    />
  );
}

export function LazyImage({ 
  src, 
  alt, 
  containerClassName = "",
  imgClassName = "",
  fallback,
  errorFallback
}: { 
  src: string; 
  alt: string; 
  containerClassName?: string;
  imgClassName?: string;
  fallback?: React.ReactNode;
  errorFallback?: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading a bit before it enters the viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={containerClassName}>
      {isInView ? (
        <Suspense fallback={fallback}>
          <ImgResource src={src} alt={alt} className={imgClassName} errorFallback={errorFallback} />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
}
