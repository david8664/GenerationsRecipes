"use client";
import { useCurrentUser } from "@/hooks/use-current-user";
import { UserInfo } from "@/components/user-info";
const settingPage = () => {
  const user = useCurrentUser();
  if (!user) return;
  return <UserInfo label="פרופיל" user={user} />;
};
export default settingPage;