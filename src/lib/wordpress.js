const BASE_URL = process.env.WORDPRESS_API_URL;

/**
 * { cache: 'no-store' } immediate
 * { next: { revalidate: 3600 } } to revalidate every hour (ISR).
 */
export async function getPages() {
  const res = await fetch(`${BASE_URL}/pages/`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`WordPress API error: ${res.status}`);
  }

  return res.json();
}

export async function getPageBySlug(slug) {
  const res = await fetch(`${BASE_URL}/pages/?slug=${slug}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`WordPress API error: ${res.status}`);
  }

  const pages = await res.json();
  return pages[0] ?? null;
}
