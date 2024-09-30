import { FaGithub } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

const UserContactBox = () => {
  return (
    <section className="flex flex-col gap-2">
      <hr className="h-px bg-gray-20" />
      <div className="flex gap-2.5 items-center">
        <MdOutlineMail
          color="#ADB5BD"
          className="w-7 h-7 cursor-pointer duration-200 hover:brightness-[60%]"
        />
        <FaGithub
          color="#ADB5BD"
          className="w-6 h-6 cursor-pointer duration-200 hover:brightness-[60%]"
        />
      </div>
    </section>
  );
};

export default UserContactBox;
