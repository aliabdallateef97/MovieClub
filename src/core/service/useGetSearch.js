import { request,cancelRequest } from '@/core/utils/axios';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {search} from '@/core/model'


// const searchMovies = (payload) => {
//   if (payload.type === 'movies') {
//         return request({
//           url: `search/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&query=${payload.value}`,
//         });
//       } else if (payload.type === 'series') {
//         return request({
//           url: `search/tv?api_key=3e21184f03d65304d7cd0f6382c5f7e0&query=${payload.value}`,
//         });
//       } else {
//         return request({
//           url: `search/person?api_key=3e21184f03d65304d7cd0f6382c5f7e0&query=${payload.value}`,
//         });
//       }
// };

const searchMovies = (payload) => {
  const cancelTokenSource = axios.CancelToken.source();

  let requestPromise;
  if (payload.type === 'movies') {
    requestPromise = request({
      url: `search/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&query=${payload.value}`,
      cancelToken: cancelTokenSource.token,
    });
  } else if (payload.type === 'series') {
    requestPromise = request({
      url: `search/tv?api_key=3e21184f03d65304d7cd0f6382c5f7e0&query=${payload.value}`,
      cancelToken: cancelTokenSource.token,
    });
  } else {
    requestPromise = request({
      url: `search/person?api_key=3e21184f03d65304d7cd0f6382c5f7e0&query=${payload.value}`,
      cancelToken: cancelTokenSource.token,
    });
  }

  return {
    requestPromise,
    cancelTokenSource,
  };
};

export const getSearchedMovies = (payload) => {
  const { requestPromise, cancelTokenSource } = searchMovies(payload);

  const query = useQuery({
    queryKey: ['search-movie',payload.value],
    queryFn: () => requestPromise,
    enabled:!!payload.value,
    select:(data)=>search(data)
  });

  const cancel = () => {
    cancelRequest(cancelTokenSource, 'Request canceled by user.');
  };
  return {
    ...query,
    cancel,
}
}

// export const getSearchedMovies = (payload) => {
//   return useQuery({
//     queryKey: ['search-movie'],
//     queryFn: () => searchMovies(payload),
//     // enabled: !!payload.value,
//   });

// };
