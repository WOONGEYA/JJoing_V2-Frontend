import { Button } from '@jjoing/ui';

type ProjectCategoryBoxProps = {
  title: string;
  emoji: string;
  items: string[];
};

const ProjectCategoryBox = ({ title, emoji, items }: ProjectCategoryBoxProps) => {
  return (
    <div className="flex flex-col gap-3 mb-5">
      <span className="text-lg">
        {emoji} {title}
      </span>
      <div className="flex gap-2">
        {items.map((item, index) => (
          <Button
            width={110}
            height="h45"
            bgColor="borderGray"
            rounded="full"
            key={index}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProjectCategoryBox;
