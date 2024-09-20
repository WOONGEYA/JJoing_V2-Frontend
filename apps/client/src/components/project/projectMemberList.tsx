import Image from 'next/image';

type ProjectMemberListProps = {
  includedMemberImageUrl: string[];
};

const ProjectMemberList = ({ includedMemberImageUrl }: ProjectMemberListProps) => {
  return (
    <div className="flex gap-1 mb-5">
      {includedMemberImageUrl.map((imageUrl, index) => (
        <Image
          src={imageUrl}
          width={40}
          height={40}
          alt="member-img"
          className="border border-gray-300 rounded-full cursor-p"
          key={index}
        />
      ))}
    </div>
  );
};

export default ProjectMemberList;
