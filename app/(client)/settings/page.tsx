"use client";
import { LogoutButton } from "@/components/auth/logout-button";
import { useCurrentUser } from "@/hooks/use-current-user";


const SettingPage = () => {
  const user = useCurrentUser();

  return (
    <div className="bg-white p-10 rounded-xl">
      <h1>דף הגדרות</h1>
      <span>{JSON.stringify(user)}</span>
      <form>
        <LogoutButton>
          <button type="submit">התנתקות</button>
        </LogoutButton>
      </form>
    </div>
  );
};
export default SettingPage;
