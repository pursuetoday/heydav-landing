import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toastify(message: string, variant: string) {
  switch (variant) {
    case 'error':
      toast.error(message);
      break;
    case 'success':
      toast.success(message);
      break;
    case 'info':
      toast.info(message);
      break;
    case 'warn':
      toast.warn(message);
      break;
    default:
      toast(message);
      break;
  }
}

export default Toastify;
