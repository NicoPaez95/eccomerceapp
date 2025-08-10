// src/lib/fetcher.ts
//this is script used to fetch data
export async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error fetching data');
  }

  return response.json();
}
