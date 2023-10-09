import { Icon } from '@iconify/react';
import { BASE_URL } from '@/config';
import { SocialsTypeModal, earlyAccessUser } from '@/types';

const socialsArray: SocialsTypeModal[] = [
  {
    id: 1,
    name: 'Facebook',
    icon: "eva:facebook-fill",
    getHref: (url: string) => `https://www.facebook.com/sharer.php?u=${url}`,
    color: '#1877F2'
  },
  {
    id: 2,
    name: 'Linkedin',
    icon: "eva:linkedin-fill",
    getHref: (url: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    color: '#0A66C2'
  }
];

function Modal({ showModal, setShowModal, name, list, id }: {
    showModal: boolean
    setShowModal: (showModal: boolean) => void
    name: string
    list: earlyAccessUser[]
    id: number
}) {
  const url: string = `${BASE_URL}/early-access?ref=${encodeURIComponent(id)}`;

  const convertStringToPascal = (str: string) => {
    return str
      .replace(/(\w)(\w*)/g, (g0, g1, g2) => {
        return g1.toUpperCase() + g2.toLowerCase();
      })
      .replace(/\s/g, ' ');
  };
  return (
    showModal && (
      <>
        <div
          style={{ zIndex: 9999 }}
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 m-0 md:m-12 lg:m-12 xl:m-12 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-[#EAFAF9]">
              <div className="flex items-center justify-center mt-10 rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  Thank you
                </h3>
              </div>
              <div
                role="presentation"
                className="absolute right-0 sm:right-[-40px] md:right-[-40px] lg:right-[-40px] xl:right-[-40px] cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                <div
                  style={{
                    borderRadius: '50%',
                    padding: '5px 5px 5px 5px',
                    background: 'white',
                    marginRight: '5px',
                    height: '30px',
                    width: '30px'
                  }}
                >
                  <Icon
                    icon="gridicons:cross-small"
                    color="#303030"
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              <div className="p-6 my-5 lg:min-[567px] md:min-[567px]">
                <div className="flex flex-row justify-center gap-3">
                  {socialsArray && socialsArray.map(item => (
                    <span
                      role="presentation"
                      key={item.id}
                      className="border border-[#F1F1F1] rounded-full p-1 cursor-pointer ml-[16px]"
                      onClick={() => 
                        window.open(item.getHref(url), '_blank')
                      }
                    >
                      <Icon icon={item.icon} color={item.color} height={18} />
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-center mt-7 mb-7 rounded-t">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Waiting list
                  </h3>
                </div>
                <div className="max-h-[250px] min-h-[10rem] overflow-y-hidden">
                  <table className="w-full max-h-[200px] ring-1 ring-gray-200 rounded-md text-sm text-left text-gray-500">
                    <thead>
                      <tr className="border bg-lightPurpleBg">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          Waitlist ID
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          Name
                        </th>
                      </tr>
                    </thead>
                    <tbody className="max-h-[200px] border">
                      {list && !!list.length && list.slice(0, 3).map(item => {
                        const waitListName = convertStringToPascal(item.name);
                        return (
                          <tr
                            key={item._id}
                            className="border-b"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                              {item.count}
                            </th>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                              {waitListName || '-'}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-40 fixed inset-0 z-50 bg-black" />
      </>
    )
  );
}

export default Modal;
