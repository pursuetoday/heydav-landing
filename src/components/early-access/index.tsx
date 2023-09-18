import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Container from "@/layouts/container";
import TextField from "../ui/TextField";
import Toastify from '../ui/Toastify';
import { earlyAccessContent } from "@/constants/earlyAccess";
import earlyAccess from '/public/images/early_access_page.png';
import Modal from '../ui/Modal';
import axios, { AxiosResponse } from 'axios';
import { earlyAccessUser } from '@/types';
import { API_URL } from '@/config';

interface EarlyAccessUserData {
  data: earlyAccessUser[]
}

export default function EarlyAccessComponent() {
  const [list, setList] = useState<earlyAccessUser[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [id, setId] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  function isValidEmail(email: string) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  const showToast = (message: string, type: string) => {
    Toastify(message, type);
  };

  const onSubmit = async () => {
    try {
      if (!email && !name) {
        return showToast('Missing fields', 'error');
      }
      if (!isValidEmail(email)) {
        setError(true);
        return showToast('Please enter a valid email', 'error');
      }

      const result = await axios.post(`${API_URL}/api/earlyaccess/create-access`, {
        name,
        email
      });

      if (result && result.status === 200) {
        setEmail('');
        setName('');
        setId(result?.data?.count);
      } 
    } catch (error) {
      showToast('An error occurred while submitting the form', 'error');
      console.error(error);
    }
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) {
      setError(false);
    }
  };

  useEffect(() => {
    const getAllWaitList = async () => {
      try {
        const result: AxiosResponse<EarlyAccessUserData> = await axios.post(`${API_URL}/api/earlyaccess/get-access`, {
          isLanding: true
        });
  
        if (result && result.status === 200) {
          setList(result?.data?.data);
          setShowModal(true);
          setEmail('');
          setName('');
        }
      } catch (error) {
        console.error(error);
      }
    };

    getAllWaitList();
  }, [id])

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 px-5">
        <div className="mt-12">
          <h1 className="text-center md:text-left text-[32px]  sm:text-[36px] md:text-[40px] lg:text-[48px] lg:w-[90% text-teal-500">
            Reducing Development Time, with AI
          </h1>
          <div>
            {earlyAccessContent && !!earlyAccessContent.length && earlyAccessContent.map(item => (
              <div key={item.id} className="flex flex-row py-3 pr-3 mt-2">
                <div
                  style={{
                    borderRadius: '50%',
                    padding: '5px 5px 5px 5px',
                    background: '#EAFAF9',
                    marginRight: '5px',
                    height: '30px',
                    width: '30px'
                  }}
                >
                  <Icon
                    icon="mdi:tick"
                    width={20}
                    height={20}
                    className='text-teal-500'
                  />
                </div>
                <span className="ml-4   text-lg mt-[2px] text-left">
                  {item.heading}
                </span>
              </div>
            ))}
          </div>
          <div className="w-[95%] md:w-[60%] lg:w-[60%] mt-4">
            <label className="text-[14px] text-black/60 font-semibold">
              Name:
            </label>
            <TextField
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label className="text-[14px] text-black/60 font-semibold">
              Email Address:
            </label>
            <TextField
              error={error}
              type="email"
              value={email}
              placeholder="Email Address"
              onChange={onChangeEmail}
            />
          </div>
          <div className="mt-10">
            <button
              type="button"
              className="border-gradient-to-r bg-gradient-to-r from-teal-500 to-teal-300 font-[520] border-2 w-full md:text-[16px] md:w-auto lg:w-auto rounded-[12px] px-[34px] py-[8px]  text-[16px] text-[#fff]"
              onClick={() => {
                onSubmit();
              }}
            >
              I want early access
            </button>
            <Modal
              list={list}
              name={name}
              id={id}
              setShowModal={setShowModal}
              showModal={showModal}
            />
          </div>
        </div>

        <div>
          <div className="my-[20px]  md:my-[35px]  sm:my-[20px]">
            <div className="relative hidden lg:block  h-[145px] mb-[1rem] lg:h-[724px] lg:mb-[1rem] rounded-[12px] mt-32">
              <Image
                alt="post cover"
                src={earlyAccess}
                placeholder="blur"
                blurDataURL={earlyAccess.src}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
