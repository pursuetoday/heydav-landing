import { useForm, Controller } from "react-hook-form";
import SolidButton from "../ui/SolidButton";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

const WaitlistForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // You can perform further actions, like submitting the data to a server
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
                className="w-full border border-[#B4BCC3] rounded-[12px] p-3 px-6 text-[#919EAB]"
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
                className="w-full border border-[#B4BCC3] rounded-[12px] p-3 px-6 text-[#919EAB]"
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
                className="w-full border border-[#B4BCC3] rounded-[12px] p-3 px-6 text-[#919EAB]"
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
      <div className="flex justify-center lg:justify-end mt-7">
        <SolidButton
            chevron 
            withArrow
            buttonText="Get Started"
            customStyle={"lg:h-[40px]"}
        />
      </div>
    </form>
  );
};

export default WaitlistForm;
