import { useMutation } from '@tanstack/react-query';
import { confirmLogin as confirmLoginApi } from '../../services/apiAuth';
import { toast } from 'react-hot-toast';
import { useMoveBack } from '../../hooks/useMoveBack';

export function useConfirmLogin() {
  const moveBack = useMoveBack()

  const { mutate: confirmLogin, isPending: isLoading } = useMutation({
    mutationFn: ({ email, code }) => confirmLoginApi({ email, code }),
    onError: (err) => {
      console.log('ERROR', err);
      if (err.message === "زمان ارسال کد به اتمام رسیده است") moveBack()
      toast.error(err.message);
    },
  });

  return { confirmLogin, isLoading };
}
