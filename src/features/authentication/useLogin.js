import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { toast } from 'react-hot-toast';

export function useLogin() {
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onError: (err) => {
      console.log('ERROR', err);
      toast.error(err.message);
    },
  });

  return { login, isLoading };
}
