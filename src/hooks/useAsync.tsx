import { useState, useEffect } from 'react';

interface AsyncHookResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | TypeError;
  act: (...args: any[]) => Promise<T>;
}

export default function useAsync<T>(handler: (...args: any[]) => Promise<T>, immediate = true): AsyncHookResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(immediate);
  const [error, setError] = useState<any>(null);

  const act = async (...args: any[]): Promise<T> => {
    setLoading(true);
    setError(null);

    try {
      const data = await handler(...args);
      setData(data);
      setLoading(false);
      return data;
    } catch (error: any) {
      setError(error);
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    if (immediate) {
      act();
    }
  }, []);

  return {
    data,
    loading,
    error,
    act
  };
}
