import avatar from "@/public/svgs/user-circle.svg";
import Image from "next/image";
interface UserProfileProps {
  name: string;
  image?: string | null;
}
//not the final code

//
const UserProfile = ({ image, name }: UserProfileProps) => {
  return (
    <div>
      {typeof image == "undefined" ? (
          <label className="text-sm rounded-full border-2 border-neutral-7 p-0.5">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </label>
      ) : (
          <Image src={image || avatar} alt="user avatar" height={24} width={24} />
      )}
    </div>
  );
};

export default UserProfile;
