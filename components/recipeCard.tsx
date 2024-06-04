import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PiClockCountdownDuotone } from "react-icons/pi";
import { LuChefHat } from "react-icons/lu";

const RecipeCard = ({
  id,
  illustrationImage,
  name,
  preparationTime,
  description,
  chefPhoto,
  chefNickname,
}: RecipeProps) => {
  const router = useRouter();

  return (
    <div className="w-52 h-60 bg-slate-400 border rounded-md flex flex-col flex-wrap">
      <div
        className="relative w-full h-1/3 hover:h-24 cursor-pointer"
        onClick={() => router.push(`/p/${chefNickname}/${id}`)}
      >
        <header className="z-10 backdrop-blur absolute top-4">
          {name} - {chefNickname}
        </header>
        {illustrationImage ? (
          <Image alt="תמונה להמחשה" src={illustrationImage} fill />
        ) : (
          <div className="bg-gray-600" />
        )}
      </div>
      <div className="flex flex-col flex-wrap relative h-32 px-2">
        <Avatar
          className="mr-4 -mt-4 cursor-pointer"
          onClick={() => router.push(`/p/${chefNickname}`)}
        >
          <AvatarImage src={chefPhoto} />
          <AvatarFallback>
            <LuChefHat />
          </AvatarFallback>
        </Avatar>
        <p className="w-full max-h-20 text-gray-600 text-ellipsis overflow-hidden">
          {description}
        </p>
        <div className="absolute bottom-0 left-4 flex flex-row gap-1 text-gray-700 items-center">
          <p>{preparationTime}</p>
          <PiClockCountdownDuotone />
        </div>
      </div>
    </div>
  );
};
export default RecipeCard;
