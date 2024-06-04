"use client";

import Recipes from "@/components/recipes";

const ProfilePage = ({ params }: { params: { chefNickname: string } }) => {
  return (
    <div className="w-2/3">
      <Recipes endpoint={`/p/${params.chefNickname}`} />
    </div>
  );
};
export default ProfilePage;
