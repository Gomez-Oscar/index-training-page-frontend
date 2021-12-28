import { useState, useCallback, useRef, useEffect } from 'react';

// se evitan ciclos infinitos con useCallback

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // esta referencia se mantiene asi la función se vuelva a correr
  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setIsLoading(true);

      // para cancelar una peticion en caso de que se cambie de pagina
      const httpAbortController = new AbortController();
      activeHttpRequests.current.push(httpAbortController);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortController.signal, // cancelar el request
        });

        const responseData = await response.json();

        //eliminar controladores viejos
        activeHttpRequests.current = activeHttpRequests.current.filter(
          (requestController) => requestController !== httpAbortController
        );

        // se valida si se tiene una response con codigo 200
        if (!response.ok) {
          throw new Error(responseData.message);
        }

        return responseData;
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
        throw error;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    //cleanup function o función de limpieza
    return () => {
      activeHttpRequests.current.forEach((abortController) =>
        abortController.abort()
      );
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
