import { useForm, Controller } from "react-hook-form";
import { Icons } from "../ui/Icons";
import Toastify from '../ui/Toastify';
import { API_URL } from '@/config';
import axios from 'axios';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

const WaitlistForm = () => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const showToast = (message: string, type: string) => {
    Toastify(message, type);
  };

  const onSubmit = async (data: FormData) => {
    try {
      const result = await axios.post(`${API_URL}/api/newsletter/create`, {
        firstName: data.firstName,
        lastName: data?.lastName,
        email: data?.email,
      });

      if (result.status === 200) {
        showToast('You have been subscribed!', 'success');        
        reset({
          firstName: "",
          lastName: "",
          email: ""
        });
      } 
    } catch (error) {
      showToast('An error occurred while submitting the form', 'error');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 flex">
        <div className="w-full md:w-1/2 md:mr-2">
          <Controller
            control={control}
            name="firstName"
            rules={{ required: "First name is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="First Name"
                className="w-full border border-[#B4BCC3] rounded-[12px] p-3 px-6 text-[#333]"
              />
            )}
          />
          {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
        </div>
        <div className="hidden md:w-1/2 ml-2 md:block">
          <Controller
            control={control}
            name="lastName"
            rules={{ required: "Last name is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Last Name"
                className="w-full border border-[#B4BCC3] rounded-[12px] p-3 px-6 text-[#333]"
              />
            )}
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
        </div>
      </div>
      <div className="mb-4 md:hidden">
          <Controller
            control={control}
            name="lastName"
            rules={{ required: "Last name is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Last Name"
                className="w-full border border-[#B4BCC3] rounded-[12px] p-3 px-6 text-[#333]"
              />
            )}
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
      </div>
      <div className="mb-4">
        <Controller
          control={control}
          name="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <input
              {...field}
              type="email"
              placeholder="Email"
              className="w-full border border-[#B4BCC3] rounded-[12px] p-3 px-6 text-[#919EAB]"
            />
          )}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="flex justify-center lg:justify-center mt-7">
        <button
          className='cursor-pointer flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-teal-500 to-teal-300 rounded-[15px] px-[12px] md:px-[20px] lg:px-[28px] h-[40px] lg:h-[42px] text-white font-bold text-sm lg:text-[16px]'
          type="submit"          
        >
          <div className="flex items-center justify-center">
            <span className="mr-1 lg:mr-2">Subscribe</span>
            <Icons.chevronRight size={24} className="mt-1" />
          </div>
        </button>
      </div>
    </form>
  );
};

export default WaitlistForm;
