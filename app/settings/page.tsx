"use client";
import UserInfo from "@/components/user-info";
import useCurrentUser from "@/hooks/use-current-user";
import LogoutButton from "@/components/auth/logout-button";

const SettingPage = () => {
  const user = useCurrentUser();
  if (!user) return;
  return (
    <div className="bg-white p-10 rounded-xl w-1/2 flex flex-col items-center">
      <h1>דף הגדרות</h1>
      <UserInfo label="פרופיל" user={user} />
      <form>
        <LogoutButton>
          <button type="submit">התנתקות</button>
        </LogoutButton>
      </form>
    </div>
  );
};
export default SettingPage;
